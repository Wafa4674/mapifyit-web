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

function postValue(array $keys): string
{
    foreach ($keys as $key) {
        if (isset($_POST[$key]) && trim((string) $_POST[$key]) !== '') {
            return (string) $_POST[$key];
        }
    }
    return '';
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

// Honeypot (leave empty in real submissions)
if (!empty($_POST['website'] ?? '')) {
    echo json_encode(['ok' => true, 'message' => 'Thank you']);
    exit;
}

$contentType = strtolower((string) ($_SERVER['CONTENT_TYPE'] ?? ''));
if (empty($_POST) && strpos($contentType, 'application/json') !== false) {
    $jsonPayload = json_decode((string) file_get_contents('php://input'), true);
    if (is_array($jsonPayload)) {
        $_POST = $jsonPayload;
    }
}

$source    = clean(postValue(['source']), 32);
$helpType  = clean(postValue(['helpType', 'topic', 'demoTopic']), 64);
$fullName  = clean(postValue(['fullName', 'fullname', 'name', 'your-name']), 200);
$firstName = clean(postValue(['firstName', 'first_name', 'fname']), 100);
$lastName  = clean(postValue(['lastName', 'last_name', 'lname']), 100);
$email     = clean(postValue(['email', 'emailAddress', 'your-email']), 254);
$phone     = clean(postValue(['phone', 'phoneNumber', 'telephone', 'mobile']), 32);
$message   = clean(postValue(['message', 'comments', 'details']), 500);

if ($fullName === '') {
    $fullName = trim($firstName . ' ' . $lastName);
}

if ($fullName === '') {
    $fullName = 'Website lead';
}

if ($email === '') {
    jsonError('Please enter your email address.');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    jsonError('Please enter a valid email address.');
}

$phone = preg_replace('/\D+/', '', $phone) ?? '';
if ($phone !== '' && !preg_match('/^\d{10}$/', $phone)) {
    jsonError('Please enter exactly 10 digits for phone number.');
}

if ($helpType === '') {
    $helpType = 'other';
}

if (!isset($helpLabels[$helpType])) {
    jsonError('Invalid topic selected.');
}

$helpLabel    = $helpLabels[$helpType];
$sourceLabel  = $source === 'hero' ? 'Hero form' : ($source === 'modal' ? 'Popup form' : $source);
$messageLabel = $message !== '' ? $message : '-';

$subject = 'MapifyIt demo request: ' . $helpLabel . ' - ' . $fullName;

$bodyHtml = '
<h2>New demo booking request</h2>
<p><strong>Source:</strong> ' . htmlspecialchars($sourceLabel, ENT_QUOTES, 'UTF-8') . '</p>
<p><strong>Topic:</strong> ' . htmlspecialchars($helpLabel, ENT_QUOTES, 'UTF-8') . '</p>
<p><strong>Name:</strong> ' . htmlspecialchars($fullName, ENT_QUOTES, 'UTF-8') . '</p>
<p><strong>Email:</strong> ' . htmlspecialchars($email, ENT_QUOTES, 'UTF-8') . '</p>
<p><strong>Phone:</strong> ' . htmlspecialchars($phone !== '' ? $phone : '-', ENT_QUOTES, 'UTF-8') . '</p>
<p><strong>Message:</strong></p>
<p>' . nl2br(htmlspecialchars($messageLabel, ENT_QUOTES, 'UTF-8')) . '</p>
';

$bodyText = "New demo booking request\n\n"
    . "Source: {$sourceLabel}\n"
    . "Topic: {$helpLabel}\n"
    . "Name: {$fullName}\n"
    . "Email: {$email}\n"
    . "Phone: " . ($phone !== '' ? $phone : '-') . "\n\n"
    . "Message:\n{$messageLabel}\n";

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
    $mail->addReplyTo($email, $fullName);

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
