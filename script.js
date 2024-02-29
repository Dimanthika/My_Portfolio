function validateForm() {
    var email = document.forms["contactForm"]["email"].value;
    var phone = document.forms["contactForm"]["phone"].value;
  
    // Validate email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      displayErrorMessage("Please enter a valid email address");
      return false;
    }
    // Validate phone number
    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      displayErrorMessage("Please enter a 10-digit phone number");
      return false;
    }
  
    // Clear error message
    clearErrorMessage();
  }
  
  function displayErrorMessage(message) {
    var errorElement = document.createElement("p");
    errorElement.className = "error-message";
    errorElement.textContent = message;
    var form = document.forms["contactForm"];
    form.appendChild(errorElement);
  }
  
  function clearErrorMessage() {
    var form = document.forms["contactForm"];
    var errorElement = form.querySelector(".error-message");
    if (errorElement) {
      form.removeChild(errorElement);
    }
  }