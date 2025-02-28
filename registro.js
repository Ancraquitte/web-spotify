// Seleccionar el formulario
const registerForm = document.querySelector('.register-form');

// Evento para manejar el envío del formulario
registerForm.addEventListener('submit', (event) => {
     event.preventDefault(); // Evitar envío por defecto

     // Obtener el valor del correo electrónico
     const email = document.getElementById('email').value;

     // Validar si el campo está vacío
     if (!email) {
          alert('Por favor, ingresa tu correo electrónico.');
          return;
     }
});