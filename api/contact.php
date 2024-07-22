<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$firstName = htmlspecialchars($_POST['firstName']);
$lastName = htmlspecialchars($_POST['lastName']);
$email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
$regNumber = htmlspecialchars($_POST['regNumber']);
$className = htmlspecialchars($_POST['className']);
$feedbackType = htmlspecialchars($_POST['q3_feedbackType']);
$message = htmlspecialchars($_POST['q4_describeYour']);

$name = $firstName . " " . $lastName;

if ($email) {
    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host = "smtp.gmail.com";
    $mail->SMTPAuth = true;
    $mail->Username = "arnavrangwani@gmail.com";
    $mail->Password = $_ENV["APP_PASSWORD"];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    $mail->setFrom("arnavrangwani@gmail.com", "Grievance Redressal - Admin");
    $mail->addAddress("studentcouncil.kengeri@christuniversity.in");

    $mail->isHTML(true);
    $mail->Subject = "Feedback Recieved!";
    $mail->Body = "
        <p>Name: $name</p>
        <p>Email: $email</p>
        <p>Registration Number: $regNumber</p>
        <p>Class: $className</p>
        <p>Feedback Type: $feedbackType</p>
        <p>Message: $message</p>
    ";

    $mail->send();
}

header("Location: ../index.html");
exit();
?>
