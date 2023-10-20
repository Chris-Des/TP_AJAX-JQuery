$(document).ready(() => {
  // Vérifier si l'utilisateur est connecté en vérifiant la variable de session 'username'
  const isLoggedIn = Boolean("<?php echo isset($_SESSION['username']) ?>");

  // Sélectionner le bouton "Espace Client"
  const espaceClientBtn = $("#espaceClient");

  // Désactiver le bouton si l'utilisateur n'est pas connecté
  if (!isLoggedIn) {
    espaceClientBtn.prop("disabled", true);
  }

  // Gérer le clic sur le bouton "Espace Client" si l'utilisateur est connecté
  espaceClientBtn.click(() => {
    // Rediriger l'utilisateur vers la page de l'espace client
    window.location.href = "./assets/pages/espace.php";
  });
});