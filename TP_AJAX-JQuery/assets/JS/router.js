$(document).ready(() => {
  // When the "inscription" button is clicked, redirect to the "inscription.php" page
  $("#inscription").click(() => {
    window.location.href = "./assets/pages/inscription.php";
  });

  // When the "connexion" button is clicked, redirect to the "connexion.php" page
  $("#connexion").click(() => {
    window.location.href = "./assets/pages/connexion.php";
  });

  // When the "monSite" link is clicked, prevent the default behavior and redirect to the "/Exercice_AJAX-JQuery/TP_AJAX-JQuery/index.php" page
  $('#monSite').click((event) => {
    event.preventDefault();
    window.location.href = "/Exercice_AJAX-JQuery/TP_AJAX-JQuery/index.php";
  });

  // Check if the user is logged in by checking the 'username' session variable
  const isLoggedIn = Boolean("<?php echo isset($_SESSION['username']) ?>");

  // Select the "Espace Client" button
  const espaceClientBtn = $("#espaceClient");

  // Disable the button if the user is not logged in
  if (isLoggedIn) {
    espaceClientBtn.prop("disabled", true);
  }

  // Handle click on the "Espace Client" button if the user is logged in
  espaceClientBtn.click(() => {
    // Redirect the user to the "espace.php" page
    window.location.href = "./assets/pages/espace.php";
  });
});