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

  // Select the "Espace Client" button
  const espaceClientBtn = $("#espaceClient");

  // Handle click on the "Espace Client" button if the user is logged in
  espaceClientBtn.click(() => {
    // Redirect the user to the "espace.php" page
    window.location.href = "./assets/pages/espace.php";
  });
  // Sélectionnez le formulaire de déconnexion
  const logoutForm = $('form[action="../controllers/logout.php"]');

  // Lorsque le formulaire de déconnexion est soumis
  logoutForm.submit((e) => {
    // Empêcher le comportement par défaut du formulaire
    e.preventDefault();

    // Désactivez le bouton de déconnexion
    $('button[type="submit"]').prop('disabled', true);

    // Déclarez la variable countdown à l'extérieur de la fonction setInterval
    let countdown = 5; // Compte à rebours initial en secondes

    // Affichez le compte à rebours
    const countdownInterval = setInterval(() => {
      // Affichez le message de compte à rebours
      $('#countdownMessage').text(`Vous serez déconnecté dans ${countdown} secondes.`);

      // Décrémentez le compte à rebours
      countdown--;

      // Si le compte à rebours atteint 0, redirigez vers l'index
      if (countdown === 0) {
        clearInterval(countdownInterval); // Arrêtez le compte à rebours
        logoutForm[0].submit(); // Soumettez le formulaire de déconnexion
      }
    }, 1000); // Exécutez toutes les 1000 millisecondes (1 seconde)
  });
});