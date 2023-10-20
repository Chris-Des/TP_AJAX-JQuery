<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <title>Connexion</title>
</head>
<body>
    <?php include '../components/TheHeader.php';?>
    <h1>Connectez-vous</h1>
    <form id="connexionForm" action="" method="GET">
        <label for="identifier">Nom d'utilisateur ou Email</label>
        <input type="text" name="identifier" id="identifier">
        <label for="password">Mot de passe</label>
        <input type="password" name="password" id="password">
        <input type="submit" value="Envoyer">
    </form>
    <?php include '../components/TheFooter.php';?>
    <script src="../JS/connexion.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>