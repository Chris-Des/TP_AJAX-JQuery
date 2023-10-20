<?php
class User {
    private $userId;
    private $nom;
    private $email;
    private $password;
    private $createdAt;

    public function __construct($nom, $email, $password) {
        $this->nom = $nom;
        $this->email = $email;
        $this->setPassword($password);
        $this->createdAt = date('Y-m-d H:i:s');
    }
    public function getUserId() {
        return $this->userId;
    }
    public function getNom() {
        return $this->nom;
    }

    public function setNom($nom) {
        $this->nom = $nom;
    }

    public function getEmail() {
        return $this->email;
    }

    public function setEmail($email) {
        $this->email = $email;
    }

    public function getPassword() {
        return $this->password;
    }

    public function setPassword($password) {
        // Hasher le mot de passe
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        $this->password = $hashedPassword;
    }

    public function getCreatedAt() {
        return $this->createdAt;
    }
}