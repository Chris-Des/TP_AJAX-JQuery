<?php

// Création d'un objet contenant les données de redirection
// Creation of an object containing the redirection data
$redirect = (object) [
    // Propriété "type" avec la valeur "success"
    // Property "type" with the value "success"
    "type" => "success",

    // Propriété "data" avec la valeur "Vous allez être redirigée."
    // Property "data" with the value "Vous allez être redirigée."
    "data" => "Vous allez être redirigée.",

    // Propriété "url" avec la valeur "https://google.com"
    // Property "url" with the value "https://google.com"
    "url" => "https://google.com"

];

// Convertit l'objet en une chaîne JSON et l'affiche dans la console
// Converts the object into a JSON string and displays it in the console
echo json_encode($redirect);

?>