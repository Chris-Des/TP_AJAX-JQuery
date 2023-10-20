$(document).ready(() => {
  // Check if the user is logged in by checking the 'username' session variable
  const isLoggedIn = Boolean("<?php echo isset($_SESSION['username']) ?>");

  // Select the "Espace Client" button
  const espaceClientBtn = $("#espaceClient");

  // Disable the button if the user is not logged in
  if (!isLoggedIn) {
    espaceClientBtn.prop("disabled", true);
  } else {
    // Automatically redirect the user to the client space page
    window.location.href = "./assets/pages/espace.php";
  }

  // Handle click on the "Espace Client" button if the user is logged in
  espaceClientBtn.click(() => {
    // Redirect the user to the client space page
    window.location.href = "./assets/pages/espace.php";
  });
});