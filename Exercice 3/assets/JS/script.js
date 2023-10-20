$(document).ready(() => {
  $("#myForm").submit((event) => {
    event.preventDefault();

    // Récupère l'adresse e-mail saisie dans le champ de formulaire
    // Get the value of the email input
    const email = $("input[name='email']").val();

    if (!email) {
      alert("Veuillez saisir une adresse e-mail");
      $("#message").text("Veuillez saisir une adresse e-mail");
      $("input[name='email']").val("");
      return;
    }
    if (!email.includes("@")) {
      alert("Veuillez saisir une adresse e-mail valide!");
      $("#message").text("Veuillez saisir une adresse e-mail valide!");
      $("input[name='email']").val("");
      return;
    }
    // Envoie une requête POST vers le fichier "post.php" avec l'adresse e-mail saisie en utilisant AJAX
      // Send a POST request to the "post.php" file with the email value using AJAX
    $.ajax({
      url: "./assets/controllers/post.php",
      type: "POST",
      data: { email },
      dataType: "json",
      
/**
 * Une fonction qui gère la réponse réussie de l'API.
 * A function that handles the success response from the API.
 *
 * @param {Object} response - The response object from the API. L'objet de réponse de l'API.
 */
success: (response) => {
  if (response.type === "Succès") {
    // Affiche un message de réussite
    // Display a success message
    alert(response.type);
    $("#message").text(response.data);
    // Supprime le formulaire
    // Remove the form
    $("#myForm").remove();
    // Redirige vers la page d'accueil de 5 secondes
    // Redirect to the home page in 5 seconds
    setTimeout(() => {
      window.location.href = response.url;
    }, 5000);
    return;
  }
  // Autre traitement si le type n'est pas "success"
  // Other handling if the type is not "success"
  alert(`${response.type} : ${response.data}`);
  $("#message").text(response.data);
  $("input[name='email']").val("");
},
      /**
       * Handles errors during AJAX requests
       * Gère les erreurs lors des requêtes AJAX
       *
       * @param {object} xhr - The XMLHttpRequest object. L'objet XMLHttpRequest.
       * @param {string} status - The status of the AJAX request. Le statut de la requête AJAX.
       * @param {string} error - The error message. Le message d'erreur.
       * @param {object} response - The AJAX response object. L'objet de reponse de l'AJAX
       */
      error: (xhr, status, error, response) => {
        // Gère les erreurs lors de la requête AJAX
        // Handle AJAX errors
        console.error(response.type);
        $("#message")(response.data);
        console.error(error);
        console.error(status);
        console.error(xhr);
        alert("Une erreur est survenue");
      },
    });
  });
});
