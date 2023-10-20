$(document).ready(() => {
  let invalidTimeout = null;
  const emailField = $("#email");
  const passwordField = $("#password");
  const usernameField = $("#username");
  const submitButton = $("#submit");

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isValidUsername(username) {
    return username.length >= 5;
  }

  function checkFormValidity() {
    const email = emailField.val();
    const password = passwordField.val();
    const username = usernameField.val();

    const isEmailValid = isValidEmail(email);
    const isPasswordValid =
      /(?=.*[A-Z])/.test(password) &&
      /(?=.*\d)/.test(password) &&
      /(?=.*[!@#$%^&*()])/.test(password) &&
      password.length >= 10;
    const isUsernameValid = isValidUsername(username);

    if (isEmailValid && isPasswordValid && isUsernameValid) {
      submitButton.prop("disabled", false);
    } else {
      submitButton.prop("disabled", true);
    }
  }

  emailField.on("input", () => {
    const email = emailField.val();
    clearTimeout(invalidTimeout);
    if (isValidEmail(email)) {
      emailField.removeClass("invalid");
    } else {
      invalidTimeout = setTimeout(() => {
        emailField.addClass("invalid");
      }, 300);
    }
    checkFormValidity();
  });

  passwordField.on("input", () => {
    const password = passwordField.val();
    updatePasswordRequirements(password);
    checkFormValidity();
  });

  usernameField.on("input", () => {
    const username = usernameField.val();
    clearTimeout(invalidTimeout);
    if (isValidUsername(username)) {
      usernameField.removeClass("invalid");
    } else {
      invalidTimeout = setTimeout(() => {
        usernameField.addClass("invalid");
      }, 300);
    }
    updateUsernameRequirements(username);
    checkFormValidity();
  });

  function updateUsernameRequirements(username) {
    const lengthRequirement = $("#lengthName-requirement");

    if (username.length >= 5) {
      lengthRequirement.text("✅");
      $("#username-requirements").css("display", "flex");
    } else {
      $("#username-requirements").css("display", "flex");
      lengthRequirement.text("❌");
    }
  }

  function updatePasswordRequirements(password) {
    const uppercaseRequirement = $("#uppercase-requirement");
    const numberRequirement = $("#number-requirement");
    const specialCharRequirement = $("#special-char-requirement");
    const lengthRequirement = $("#length-requirement");

    if (/(?=.*[A-Z])/.test(password)) {
      $('#password-requirements').css("display", "flex");
      uppercaseRequirement.text("✅");
    } else {
      $('#password-requirements').css("display", "flex");
      uppercaseRequirement.text("❌");
    }

    if (/(?=.*\d)/.test(password)) {
      $('#password-requirements').css("display", "flex");
      numberRequirement.text("✅");
    } else {
      $('#password-requirements').css("display", "flex");
      numberRequirement.text("❌");
    }

    if (/(?=.*[!@#$%^&*()])/.test(password)) {
      $('#password-requirements').css("display", "flex");
      specialCharRequirement.text("✅");
    } else {
      $('#password-requirements').css("display", "flex");
      specialCharRequirement.text("❌");
    }

    if (password.length >= 10) {
      $('#password-requirements').css("display", "flex");
      lengthRequirement.text("✅");
    } else {
      $('#password-requirements').css("display", "flex");
      lengthRequirement.text("❌");
    }

    const isPasswordValid =
      /(?=.*[A-Z])/.test(password) &&
      /(?=.*\d)/.test(password) &&
      /(?=.*[!@#$%^&*()])/.test(password) &&
      password.length >= 10;

    if (isPasswordValid) {
      submitButton.prop("disabled", false);
    } else {
      submitButton.prop("disabled", true);
    }
  }

  checkFormValidity(); // Appeler la fonction pour vérifier la validité du formulaire au chargement de la page

  $("#inscriptionForm").submit((event) => {
    event.preventDefault();

    const username = $("#username").val();
    const email = $("#email").val();
    const password = $("#password").val();

    if (!isValidEmail(email)) {
      // Afficher un message d'erreur
      // Show an error message
      alert("Veuillez entrer une adresse email valide.");
      // Annuler l'envoi du formulaire
      // Cancel the form
      return;
    }

    // Envoyer les données du formulaire via AJAX
    // Send the form data to the server
    $.ajax({
      type: "POST",
      url: "../controllers/post.php",
      data: {
        username,
        email,
        password,
      },
      dataType: "json",
      /**
       * Display the server response.
       * Afficher la réponse du serveur
       *
       * @param {any} response - the server response. La réponse du serveur
       *
       */
      success: (response) => {
        console.log(response);
        if (response.success === true) {
          // Afficher le message de réussite
          // Show a success message
          $("#success-message").css("display", "block");
          $("#success-message").text(response.message);
          // Rediriger vers la page de connexion
          // Redirect to the login page
          setTimeout(() => {
            window.location.href = "../pages/connexion.php";
          }, 3000);
          return;
        } 
        
        $("#error-message").css("display", "block");
        $("#error-message").text(response.message);

      },
      /**
       * Display the server response.
       * Afficher la réponse du serveur
       *
       * @param {any} response - the response from the server. La réponse du serveur
       */
      error: (xhr, status, error, response) => {
        // Afficher la réponse du serveur
        console.log(
          `${xhr.responseText} ${status} ${error} ${response.message}`,
        );
        // Afficher le message d'erreur
        // Show an error message
        $("#error-message").css("display", "block");
        $("#error-message").text(response.message);
      },
    });
  });
});
