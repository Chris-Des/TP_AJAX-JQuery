$(document).ready(() => {
  $("#connexionForm").submit((event) => {
    event.preventDefault();

    // Récupérer les données du formulaire
    const identifier = $("#identifier").val();
    const password = $("#password").val();

    // Validation côté client
    if (!identifier || !password) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    // Envoyer les données du formulaire via AJAX
    $.ajax({
      type: "GET",
      url: "../controllers/get.php",
      data: {
        identifier,
        password,
      },
      success(response) {
        // Afficher la réponse du serveur
        console.log(response);
        alert("Authentification réussie !");
        window.location.href = "../pages/espace.php";
      },
      error() {
        // Afficher un message d'erreur
        alert("Une erreur s'est produite lors de l'authentification.");
      },
    });
  });
});
