<?php

echo 'It\'s alive!';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

$errors = array();
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	if (empty($_POST['email'])) {
		$errors[] = 'Email is empty';
	} else {
		$email = $_POST['email'];
		// Validating the email
		if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
			$errors[] = 'Invalid email';
		}
	}

	if (empty($_POST['message'])) {
		$errors[] = 'Message is empty';
	} else {
		$message = $_POST['message'];
	}

	if (empty($errors)) {
		$date = date('j, F Y h:i A');

		$emailBody = "
		<html>
		<head>
			<title>$email is contacting you</title>
		</head>
		<body style='background-color:#fafafa;'>
			<div style='padding:20px'>
			Date: <span style='color:#888'>$date</span>
			<br>
			Email: <span style='color:#888'>$email</span>
			<br>
			Message: <div style='color:#888'>$message</div>
			</div>
		</body>
		</html>
		";

		$headers = 'From: Contact From <contact@mydomain.com>' . '\r\n' .
		'Reply-To: $email' . '\r\n' .
		'MIME-Version: 1.0\r\n' .
		'Content-Type: text/html; charset=iso-8859-1\r\n';

		$to = 'cammcd116@gmail.com';
		$subject = 'Enquiry from Portfolio';

		if (mail($to, $subject, $emailBody, $headers)) {
			$sent = true;
		}
	}
}

?>

<?php if (!empty($errors)) : ?>

{
	'status': 'fail',
	'error': <?php echo json_encode($errors) ?>
}

<?php endif; ?>

<?php if (isset($sent) && $sent === true) : ?>

{
	'status': 'success',
	'message': 'Message successfully submitted'
}

<?php endif; ?>