$(document).ready(() => {
  // When the "connexionForm" form is submitted
  $("#connexionForm").submit((event) => {
    event.preventDefault();

    // Get the form data
    const identifier = $("#identifier").val();
    const password = $("#password").val();

    // Client-side validation
    if (!identifier || !password) {
      alert("Please fill in all fields.");
      return;
    }

    // Send the form data via AJAX
    $.ajax({
      type: "GET",
      url: "../controllers/get.php",
      data: {
        identifier,
        password,
      },
      success(response) {
        // Display the server response
        console.log(response);
        alert("Authentication successful!");
        window.location.href = "../pages/espace.php";
      },
      error() {
        // Display an error message
        alert("An error occurred during authentication.");
      },
    });
  });
});