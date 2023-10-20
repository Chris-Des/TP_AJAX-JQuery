<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <title>Espace utilisateur</title>
</head>
<body>
    <?php include '../components/TheHeader.php';?>
    <h1>Espace utilisateur</h1>
    <p>Bienvenue sur votre espace utilisateur.</p>
    <div>
        <p>Nom d'utilisateur : <?php echo $_SESSION['username']; ?></p>
        <p>Email : <?php echo $_SESSION['email']; ?></p>
        <p>Mot de passe : <?php echo $_SESSION['password_hash']; ?></p>
        <p>Compte créé le : <?php echo $_SESSION['created_at']; ?></p>

        <form action="../controllers/logout.php" method="post">
            <button type="submit" class="btn btn-primary">Déconnexion</button>
        </form>
    </div>
    <?php include '../components/TheFooter.php';?>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>