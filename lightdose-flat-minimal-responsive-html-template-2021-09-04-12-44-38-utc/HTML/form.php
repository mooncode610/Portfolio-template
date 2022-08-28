<?php
/*
 * Please take into account, that this script provided only as an example.
 * You should certainly modify or replace it with one you require for your particular needs.
 * */

$to = ( isset( $_POST[ 'feedbackFormTo' ] ) & ! empty( $_POST[ 'feedbackFormTo' ] ) ) ? $_POST[ 'feedbackFormTo' ] : NULL;
$to = ( filter_var( $to, FILTER_VALIDATE_EMAIL ) ) ? $to : NULL;
$from = ( isset( $_POST[ 'feedbackFormEmail' ] ) & ! empty( $_POST[ 'feedbackFormEmail' ] ) ) ? $_POST[ 'feedbackFormEmail' ] : NULL;
$from = ( filter_var( $from, FILTER_VALIDATE_EMAIL ) ) ? $from : NULL;
$sender = ( isset( $_POST[ 'feedbackFormName' ] ) & ! empty( $_POST[ 'feedbackFormName' ] ) ) ? htmlspecialchars( $_POST[ 'feedbackFormName' ] ) : NULL;
$comment = ( isset( $_POST[ 'feedbackFormComment' ] ) & ! empty( $_POST[ 'feedbackFormComment' ] ) ) ? htmlspecialchars( $_POST[ 'feedbackFormComment' ] ) : NULL;
$subject = 'Message from ' . $sender;
$headers = 'From: (Your site) <mailer@lightdose.itembridge.com>' . "\r\n" . 'Content-type: text/html; charset=utf-8';
$message = '
<html>
	<head>
		<title>Your Site Contact Form</title>
	</head>
	<body>
		<h3>Name: <span style="font-weight: normal;">' . $sender . '</span></h3>
		<h3>Email: <span style="font-weight: normal;">' . $from . '</span></h3>
		<div>
			<h3 style="margin-bottom: 5px;">Comment:</h3>
			<div>' . $comment . '</div>
		</div>
	</body>
</html>';
if( $from !== NULL && $sender !== NULL && $comment !== NULL  ) {
	mail( $to, $subject, $message, $headers ) or die( '<span style="color: #c3293a;">Error sending Mail</span>' );
	echo '<span style="color: #3aeb89;">Your email was sent successfully!</span>';
} else
	echo '<span style="color: #c3293a;">All fields must be filled!</span>';
?>
