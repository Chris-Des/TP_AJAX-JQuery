<?php
session_start();
require '../db/login.php';
require 'user.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $identifier = $_GET['identifier'];
    $password = $_GET['password'];

    if (!empty($identifier) && !empty($password)) {
        $stmt = $pdo->prepare("SELECT * FROM user WHERE username = :identifier1 OR email = :identifier2");
        $stmt->execute([':identifier1' => $identifier, ':identifier2' => $identifier]);
        $user = $stmt->fetch();

        // Check if a user is found and the password matches
        if ($user && password_verify($password, $user['password_hash'])) {
            $nom = $user['username'];
            $email = $user['email'];
            $password = $user['password_hash'];
            $createdAt = $user['created_at'];

            $_SESSION ['username'] = $nom;
            $_SESSION ['email'] = $email;
            $_SESSION ['password_hash'] = $password;
            $_SESSION ['created_at'] = $createdAt;

            exit();
        } else {
            echo '<script>console.log("Identifiant ou mot de passe incorrect.");</script>';
        }
    } else {
        echo '<script>console.log("Veuillez saisir votre nom d\'utilisateur ou votre email et votre mot de passe.");</script>';
    }
}