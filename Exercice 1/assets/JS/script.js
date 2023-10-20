$(document).ready(() => {
  // Attend que le document soit prêt avant d'exécuter le code
  // Waits for the document to be ready before executing the code

  $("#myButton").click(() => {
    // Lorsque le bouton avec l'ID "myButton" est cliqué
    // When the button with the ID "myButton" is clicked

    $.getJSON("./assets/controllers/get.php", (response) => {
      // Effectue une requête AJAX GET vers le fichier "get.php" et récupère les données JSON retournées
      // Performs an AJAX GET request to the "get.php" file and retrieves the returned JSON data

      console.log(response);
      // Affiche l'objet JSON "response" dans la console du navigateur
      // Prints the JSON object "response" to the browser console

      if (response.type === "success") {
        // Vérifie si la propriété "type" de l'objet JSON "response" a la valeur "success"
        // Checks if the "type" property of the JSON object "response" has the value "success"

        console.log(response.data);
        // Affiche la valeur de la propriété "data" de l'objet JSON "response" dans la console du navigateur
        // Prints the value of the "data" property of the JSON object "response" to the browser console

        console.log(response.url);
        // Affiche la valeur de la propriété "url" de l'objet JSON "response" dans la console du navigateur
        // Prints the value of the "url" property of the JSON object "response" to the browser console

        window.location.href = response.url;
        // Redirige l'utilisateur vers l'URL spécifiée dans la propriété "url" de l'objet JSON "response"
        // Redirects the user to the URL specified in the "url" property of the JSON object "response"
      } else {
        console.log("Erreur");
        // Affiche "Erreur" dans la console du navigateur si la propriété "type" de l'objet JSON "response" n'a pas la valeur "success"
        // Prints "Erreur" to the browser console if the "type" property of the JSON object "response" does not have the value "success"
      }
    });
  });
});
