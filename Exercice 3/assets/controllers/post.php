<?php

// Vérifie si des données ont été envoyées via la méthode POST
// Verify if any data has been sent via the POST method
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Récupère l'adresse e-mail envoyée
  // Get the email address sent
  $email = $_POST['email'];

// Vérifie si l'adresse e-mail est valide
// Verify if the email address is valid
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
  // L'adresse e-mail est valide, vous pouvez continuer les opérations
  // The email address is valid, you can continue with the operations
    // Crée un objet avec les propriétés "type", "data" et "url"
    // Create an object with the properties "type", "data" and "url"
    $response = (object) [
        'type' => 'Succès',
        'data' => 'Vous allez être redirigé(e).',
        'url' => 'https://google.com'
      ];
        // Envoie la réponse au format JSON
        // Send the response in JSON format
  header('Content-Type: application/json');
  echo json_encode($response);

} else {
  // L'adresse e-mail n'est pas valide, vous pouvez afficher un message d'erreur ou prendre d'autres mesures
  // The email address is not valid, you can display an error message or take other measures
    // Crée un objet avec les propriétés "type", "data" et "url"
    // Create an object with the properties "type", "data" and "url"
    $response = (object) [
        'type' => 'Erreur',
        'data' => 'Veuillez saisir une adresse e-mail valide.',
    ];
    
  header('Content-Type: application/json');
  echo json_encode($response);
}
}