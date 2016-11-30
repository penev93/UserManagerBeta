<?php
include "../PHPMailer/PHPMailerAutoload.php";

$pdfFile=$_POST['src'];
$accounts=$_POST['emailTo'];
$mail = new PHPMailer;

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'penevvaleri93@gmail.com';                 // SMTP username
$mail->Password = 'penevvaleri93!';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable encryption, 'ssl' also accepted

$mail->From = 'penevvaleri93@gmail.com';
$mail->FromName = 'Mailer';

$arrlength=count($accounts);
for($i = 0; $i < $arrlength; $i++) {
    $mail->addAddress($accounts[$i], 'User'); 
}

$mail->addReplyTo('penevvaleri93@example.com', 'Information');
$mail->addCC('cc@example.com');
$mail->addBCC('bcc@example.com');

$mail->WordWrap = 50;                                 // Set word wrap to 50 characters
$mail->addAttachment($_SERVER['DOCUMENT_ROOT'].'/mediabasket/PDFs/'.$pdfFile);         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
//$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'PDFs';
$mail->Body    = ' <b>Hello!</b>';
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}

?>
