<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Example: Save or process the data
    echo "<h1>Thank you, $name!</h1>";
    echo "<p>We received your message:</p>";
    echo "<blockquote>$message</blockquote>";
    echo "<p>We will reach out to you at <strong>$email</strong>.</p>";
}
?>
