// Seleccionar elementos del DOM
const togglePassword = document.getElementById('toggle-password');
const passwordInput = document.getElementById('password');

// Evento para mostrar/ocultar contraseña
togglePassword.addEventListener('click', () => {
     // Cambiar entre texto y contraseña
     const isPassword = passwordInput.type === 'password';
     passwordInput.type = isPassword ? 'text' : 'password';

     // Cambiar icono del botón (puedes usar emojis o un ícono SVG)
     togglePassword.textContent = isPassword ? '🙈' : '👁️';
});

// Manejo del formulario (opcional)
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
     event.preventDefault(); // Evitar envío por defecto
     const email = document.getElementById('email').value;
     const password = passwordInput.value;

     // Validación simple
     if (!email || !password) {
          alert('Por favor, completa todos los campos.');
          return;
     }
});