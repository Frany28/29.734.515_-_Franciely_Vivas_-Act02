document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let valid = true;

    // RegEx para validaciones
    const nameRegex = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]{3,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validación de Nombre y Apellido
    if (!nameRegex.test(nameInput.value.trim())) {
      nameError.classList.remove("hidden");
      valid = false;
    } else {
      nameError.classList.add("hidden");
    }

    // Validación de Email
    if (!emailRegex.test(emailInput.value.trim())) {
      emailError.classList.remove("hidden");
      valid = false;
    } else {
      emailError.classList.add("hidden");
    }

    // Validación de Mensaje (mínimo 10 caracteres)
    if (messageInput.value.trim().length < 10) {
      messageError.classList.remove("hidden");
      valid = false;
    } else {
      messageError.classList.add("hidden");
    }

    // Si todo es válido, enviar formulario
    if (valid) {
      alert("Formulario enviado con éxito");
      form.reset();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector("[data-collapse-toggle]");
  const navbarMenu = document.getElementById("navbar-default");

  toggleButton.addEventListener("click", function () {
    navbarMenu.classList.toggle("hidden");
  });
});
