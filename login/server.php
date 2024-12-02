<?php
session_start();

// File-based storage
$file = 'users.txt';

// Handle POST requests
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'];
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    // Read user data
    $users = file_exists($file) ? unserialize(file_get_contents($file)) : [];

    if ($action === 'signup') {
        $name = $_POST['name'];
        $hint = $_POST['hint'];

        if (isset($users[$email])) {
            echo "Email already registered! <a href='index.html'>Go back</a>";
        } else {
            $users[$email] = ['name' => $name, 'password' => $password, 'hint' => $hint];
            file_put_contents($file, serialize($users));
            echo "Sign-up successful! <a href='index.html'>Login</a>";
        }
    } elseif ($action === 'login') {
        if (isset($users[$email]) && $users[$email]['password'] === $password) {
            echo "Welcome, " . $users[$email]['name'] . "! <a href='index.html'>Log Out</a>";
        } else {
            echo "Invalid email or password! <a href='index.html'>Try again</a>";
        }
    }
}
?>
