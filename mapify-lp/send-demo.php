<?php

declare(strict_types=1);

ini_set('display_errors', '0');
error_reporting(E_ALL);

header('Content-Type: application/json; charset=utf-8');

function jsonResponse(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    jsonResponse(405, ['success' => false, 'message' => 'Method not allowed.']);
}

require __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\Exception as MailException;
use PHPMailer\PHPMailer\PHPMailer;

try {
    $rawInput = file_get_contents('php://input');
    $input = json_decode($rawInput ?: '', true);
    if (!is_array($input)) {
        $input = $_POST;
    }

    $fullName = trim((string) ($input['fullName'] ?? ''));
    $email = trim((string) ($input['email'] ?? ''));
    $companyName = trim((string) ($input['companyName'] ?? ''));
    $phone = trim((string) ($input['phone'] ?? ''));
    $demoType = trim((string) ($input['demoType'] ?? ''));
    $message = trim((string) ($input['message'] ?? ''));
    $source = trim((string) ($input['source'] ?? 'Website Form'));

    if ($fullName === '' || $email === '' || $phone === '' || $demoType === '') {
        jsonResponse(422, ['success' => false, 'message' => 'Please fill in all required fields.']);
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        jsonResponse(422, ['success' => false, 'message' => 'Please enter a valid email address.']);
    }

    $configPath = __DIR__ . '/config/mail.php';
    if (!file_exists($configPath)) {
        jsonResponse(500, ['success' => false, 'message' => 'Mail configuration is missing. Copy config/mail.example.php to config/mail.php.']);
    }

    $config = require $configPath;

    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = (string) $config['smtp_host'];
    $mail->SMTPAuth = true;
    $mail->Username = (string) $config['smtp_user'];
    $mail->Password = (string) $config['smtp_pass'];
    $mail->SMTPSecure = (string) $config['smtp_secure'];
    $mail->Port = (int) $config['smtp_port'];
    $mail->CharSet = 'UTF-8';

    $mail->setFrom((string) $config['from_email'], (string) $config['from_name']);

    $recipients = $config['to_email'] ?? [];
    if (!is_array($recipients)) {
        $recipients = [$recipients];
    }

    foreach ($recipients as $recipient) {
        $recipient = trim((string) $recipient);
        if ($recipient !== '') {
            $mail->addAddress($recipient, (string) ($config['to_name'] ?? ''));
        }
    }

    if (count($mail->getToAddresses()) === 0) {
        jsonResponse(500, ['success' => false, 'message' => 'No recipient email is configured.']);
    }

    $mail->addReplyTo($email, $fullName);
    $mail->isHTML(true);
    $mail->Subject = 'New Request - ' . $demoType;

    $safeName = htmlspecialchars($fullName, ENT_QUOTES, 'UTF-8');
    $safeEmail = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
    $safeCompany = htmlspecialchars($companyName, ENT_QUOTES, 'UTF-8');
    $safePhone = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
    $safeDemoType = htmlspecialchars($demoType, ENT_QUOTES, 'UTF-8');
    $safeMessage = nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));
    $safeSource = htmlspecialchars($source, ENT_QUOTES, 'UTF-8');

    $mail->Body = <<<HTML
<h2>New Request</h2>
<p><strong>Source:</strong> {$safeSource}</p>
<p><strong>Full Name:</strong> {$safeName}</p>
<p><strong>Email:</strong> {$safeEmail}</p>
<p><strong>Company:</strong> {$safeCompany}</p>
<p><strong>Phone:</strong> {$safePhone}</p>
<p><strong>Demo Type:</strong> {$safeDemoType}</p>
<p><strong>Message:</strong><br>{$safeMessage}</p>
HTML;

    $mail->AltBody = "New Request\n\n"
        . "Source: {$source}\n"
        . "Full Name: {$fullName}\n"
        . "Email: {$email}\n"
        . "Company: {$companyName}\n"
        . "Phone: {$phone}\n"
        . "Demo Type: {$demoType}\n"
        . "Message: {$message}\n";

    $mail->send();

    jsonResponse(200, [
        'success' => true,
        'message' => 'Thank you! Your demo request has been sent successfully.',
    ]);
} catch (MailException $e) {
    jsonResponse(500, [
        'success' => false,
        'message' => 'Unable to send your request right now. Please try again later.',
    ]);
} catch (Throwable $e) {
    jsonResponse(500, [
        'success' => false,
        'message' => 'Something went wrong while processing your request.',
    ]);
}
