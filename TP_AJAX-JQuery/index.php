<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="./assets/JS/router.js"></script>
    <title>Bienvenue</title>
</head>
<body>
    <div class="principal">
        <?php include './assets/components/TheHeader.php';?>

        <div class="content container-fluid">
            <div class="row justify-content-center w-100">
                <div class="col-12 col-md-8 col-lg-6">
                    <h1 class="text-center">Bonjour, et bienvenue sur le Blog SJT</h1>

                    <div class="text-center my-4">
                        <h2>Inscrivez-vous</h2>
                        <button id="inscription" class="btn btn-primary">Inscription</button>
                    </div>
                    <div class="text-center my-4">
                        <h2>Connectez-vous</h2>
                        <button id="connexion" class="btn btn-primary">Connexion</button>
                    </div>
                </div>
            </div>
        </div>

        <?php include './assets/components/TheFooter.php';?>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>