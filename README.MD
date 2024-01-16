# Ensemble d'exercice sur AJAX / JQUERY

## Exercice 1

Créer une page HTML qui contiendra un button.
Au clic exécuter une requête get jQuery vers get.php qui renverra un objet dont les propriété sont  type = “success”, data = “vous allez être redirigé” ainsi que url = “https://google.fr” puis afficher les données dans la console

## Exercice 2

Recréer l’exercice précédent puis ajouter un input afin de faire transiter une adresse mail via une requête post puis traiter la dans post.php celle-ci devra permettre de renvoyer un objet dont les propriété sont type , data et url  puis afficher le type dans une alert ainsi qu'un message de redirection via la data sur le DOM, enfin faire disparaître le formulaire puis redirigé l’utilisateur via l’url sous 5 secondes.

## Exercice 3

Recréer l’exercice précédent en utilisant la méthode ajax 

## TP_AJAX_JQUERY

! Structurer vos exercice comme des projets,
! Nommer vos variable en anglais

TP :
Dans un fichier SQL créer une BDD MYSQL nommée blogsjt.
Créer maintenant la table user destiné à enregistrer un utilisateur sur un blog celle-ci devra contenir au minimum 4 propriétés propres à un user 

! La sécurité commence à la conception pensé à typé les propriété  Chaques données doit-être justifiées  

Une fois la base de donnée créer sur phpmyadmin, créer l’interface qui permettra à un utilisateur de s’inscrire afin d'être insérée en base de données.
( Utilisé la méthode asynchrone ajax de jQuery & une connexion PDO mysql)

Une fois l’utilisateur enregistrer puis démarrer une session utilisateur qui retiendra son login et son password renvoyez le vers une home page qui contiendra un title Bienvenue suivit du login de l’utilisateur avec un bouton de déconnexion qui renverra vers le formulaire d’inscription 

! intégrer la sécurité nécessaire pensé aux utilisateurs malveillants !

### BONUS

BONUS : mettez en forme ( css, navbar, header, footer )

BONUS: penser à la sécurité

