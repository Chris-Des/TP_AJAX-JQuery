$(document).ready(() => {
  $("#myForm").submit((event) => {
    event.preventDefault();

    // Récupère l'adresse e-mail saisie dans le champ de formulaire
    // Get the email address entered in the form
    const email = $("input[name='email']").val();

    // Envoie une requête POST vers le fichier "post.php" avec l'adresse e-mail
    // Post the email address entered in the form
    $.post("./assets/controllers/post.php", { email }, (response) => {
      // Affiche le type dans une alerte et le message de redirection sur le DOM
      // Display the type in an alert and the redirection message on the DOM
      alert(response.type);
      $("#message").text(response.data);

      // Fait disparaître le formulaire
      // Remove the form
      $("#myForm").remove();
      // Redirige l'utilisateur vers l'URL spécifiée après 5 secondes
      // Redirect the user to the URL specified after 5 seconds
      setTimeout(() => {
        window.location.href = response.url;
      }, 5000);
    });
  });
});
