<?php
 use PHPMailer\PHPMailer\PHPMailer;
include("config.php");
$email = mysqli_real_escape_string($conn, $_POST["email"]);
$firstname = mysqli_real_escape_string($conn, $_POST["fullnames"]);
$subject = mysqli_real_escape_string($conn, $_POST["subject"]);
$message = mysqli_real_escape_string($conn, $_POST["message"]);


$output = "";
include("email creds.php");
        require_once "PHPMailer/PHPMailer.php";
        require_once "PHPMailer/SMTP.php";
        require_once "PHPMailer/Exception.php";

        $mail = new PHPMailer();

        //SMTP Settings
        $mail->isSMTP();
        $mail->Host = $host;
        $mail->SMTPAuth = true;
        $mail->Username = $Accmail; //enter you email address
        $mail->Password = $Accpass; //enter you email password
        $mail->Port = 465;
        $mail->SMTPSecure = "ssl";

        //Email Settings
        $mail->isHTML(true);
        $mail->setFrom($Accmail, $mailname);
        $mail->addAddress("info@exclusiveabodes.co.za"); //enter you email address
        $mail->Subject = ("$email ($subject)");
        $mail->Body = $message;

        if ($mail->send()) {
            $output = "Message sent successfully";
        } else {
            $output = "Something went wrong, please try again later";
        }

        echo $output;

?>