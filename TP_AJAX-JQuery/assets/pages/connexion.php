<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="../css/style.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <title>Connexion</title>
</head>
<body>
<div class="principal">
    <?php include '../components/TheHeader.php';?>
    <div class="content d-flex justify-content-center align-items-center">
        <div class="row justify-content-center w-100">
            <div class="col-12 col-md-8 col-lg-6">
                <h1 class="text-center py-4">Connectez-vous</h1>
                <form id="connexionForm" action="" method="GET" class="d-flex flex-column justify-content-center align-items-center">
                    <label for="identifier" class="mb-2">Nom d'utilisateur ou Email</label>
                    <input type="text" name="identifier" id="identifier" class="mb-2">
                    <label for="password" class="mb-2">Mot de passe</label>
                    <input type="password" name="password" id="password" class="mb-2">
                    <input type="submit" value="Envoyer" class="btn btn-primary">
                </form>
            </div>
        </div>
    </div>
    <?php include '../components/TheFooter.php';?>
</div>
    <script src="../JS/connexion.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>