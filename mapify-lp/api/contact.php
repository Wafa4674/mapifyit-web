<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'message' => 'Method not allowed']);
    exit;
}

$autoload = dirname(__DIR__) . '/vendor/autoload.php';
$configFile = dirname(__DIR__) . '/config.php';

if (!is_file($autoload)) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'message' => 'Server mail library not installed. Run: composer install']);
    exit;
}

if (!is_file($configFile)) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'message' => 'Mail config missing. Copy config.example.php to config.php']);
    exit;
}

require $autoload;

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

$config = require $configFile;

function jsonError(string $message, int $code = 400): void
{
    http_response_code($code);
    echo json_encode(['ok' => false, 'message' => $message]);
    exit;
}

function clean(string $value, int $max = 500): string
{
    $value = trim(strip_tags($value));
    if (mb_strlen($value) > $max) {
        $value = mb_substr($value, 0, $max);
    }
    return $value;
}

$helpLabels = [
    'maps-api'    => 'Maps API',
    'gis'         => 'GIS Platform',
    'routing'     => 'Routing & Optimization',
    'on-premise'  => 'On-Premise Deployment',
    'fleet'       => 'Fleet Management System',
    'ekyc'        => 'NG eKYC / Identity Verification',
    'field-force' => 'Field Force Tracking',
    'other'       => 'Other',
];

$countryLabels = [
    'US'    => 'United States',
    'CA'    => 'Canada',
    'GB'    => 'United Kingdom',
    'IN'    => 'India',
    'AU'    => 'Australia',
    'other' => 'Other',
];

// Honeypot (leave empty in real submissions)
if (!empty($_POST['website'] ?? '')) {
    echo json_encode(['ok' => true, 'message' => 'Thank you']);
    exit;
}

$helpType  = clean((string) ($_POST['helpType'] ?? ''), 64);
$firstName = clean((string) ($_POST['firstName'] ?? ''), 100);
$lastName  = clean((string) ($_POST['lastName'] ?? ''), 100);
$email     = clean((string) ($_POST['email'] ?? ''), 254);
$country   = clean((string) ($_POST['country'] ?? ''), 64);
$jobTitle  = clean((string) ($_POST['jobTitle'] ?? ''), 120);
$company   = clean((string) ($_POST['company'] ?? ''), 200);
$message   = clean((string) ($_POST['message'] ?? ''), 500);
$source    = clean((string) ($_POST['source'] ?? 'website'), 32);

if ($helpType === '' || $firstName === '' || $lastName === '' || $email === '' || $country === '' || $company === '' || $message === '') {
    jsonError('Please fill in all required fields.');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    jsonError('Please enter a valid email address.');
}

if (!isset($helpLabels[$helpType])) {
    jsonError('Invalid topic selected.');
}

$helpLabel    = $helpLabels[$helpType];
$countryLabel = $countryLabels[$country] ?? $country;
$sourceLabel  = $source === 'hero' ? 'Hero form' : ($source === 'modal' ? 'Popup form' : $source);

$subject = 'MapifyIt demo request: ' . $helpLabel . ' - ' . $company;

$bodyHtml = '
<h2>New demo booking request</h2>
<p><strong>Source:</strong> ' . htmlspecialchars($sourceLabel, ENT_QUOTES, 'UTF-8') . '</p>
<p><strong>Topic:</strong> ' . htmlspecialchars($helpLabel, ENT_QUOTES, 'UTF-8') . '</p>
<p><strong>Name:</strong> ' . htmlspecialchars($firstName . ' ' . $lastName, ENT_QUOTES, 'UTF-8') . '</p>
<p><strong>Email:</strong> ' . htmlspecialchars($email, ENT_QUOTES, 'UTF-8') . '</p>
<p><strong>Country:</strong> ' . htmlspecialchars($countryLabel, ENT_QUOTES, 'UTF-8') . '</p>
<p><strong>Job title:</strong> ' . htmlspecialchars($jobTitle !== '' ? $jobTitle : '-', ENT_QUOTES, 'UTF-8') . '</p>
<p><strong>Company:</strong> ' . htmlspecialchars($company, ENT_QUOTES, 'UTF-8') . '</p>
<p><strong>Message:</strong></p>
<p>' . nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8')) . '</p>
';

$bodyText = "New demo booking request\n\n"
    . "Source: {$sourceLabel}\n"
    . "Topic: {$helpLabel}\n"
    . "Name: {$firstName} {$lastName}\n"
    . "Email: {$email}\n"
    . "Country: {$countryLabel}\n"
    . "Job title: " . ($jobTitle !== '' ? $jobTitle : '-') . "\n"
    . "Company: {$company}\n\n"
    . "Message:\n{$message}\n";

try {
    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->isSMTP();
    $mail->Host       = $config['smtp_host'];
    $mail->Port       = (int) $config['smtp_port'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $config['smtp_username'];
    $mail->Password   = $config['smtp_password'];

    $encryption = strtolower((string) ($config['smtp_encryption'] ?? 'tls'));
    if ($encryption === 'ssl') {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    } elseif ($encryption === 'tls') {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    } else {
        $mail->SMTPSecure = '';
        $mail->SMTPAutoTLS = false;
    }

    $mail->setFrom($config['from_email'], $config['from_name']);
    $mail->addAddress($config['to_email'], $config['to_name'] ?? '');
    $mail->addReplyTo($email, $firstName . ' ' . $lastName);

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = $bodyHtml;
    $mail->AltBody = $bodyText;

    $mail->send();

    echo json_encode(['ok' => true, 'message' => 'Thank you! We will confirm your demo soon.']);
} catch (Exception $e) {
    error_log('MapifyIt contact mail error: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['ok' => false, 'message' => 'Could not send your message. Please call 888-980-7422.']);
}
