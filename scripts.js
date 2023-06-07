// Obtener referencia a los elementos del DOM
const button = document.querySelector('.btn');
const form = document.querySelector('form');

// Agregar un evento al botón
button.addEventListener('click', showAlert);

// Agregar un evento al formulario
form.addEventListener('submit', handleSubmit);

// Función para mostrar una alerta de saludo
function showAlert() {
  alert('¡Hola! Gracias por visitar nuestra página.');
}

// Función para manejar el envío del formulario
function handleSubmit(event) {
  event.preventDefault();
  
  // Obtener los valores de los campos del formulario
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;
  
  // Imprimir los valores en la consola
  console.log('Nombre:', name);
  console.log('Correo electrónico:', email);
  console.log('Mensaje:', message);
  
// Validar que todos los campos estén completos
if (name === '' || email === '' || message === '') {
    alert('Por favor, completa todos los campos del formulario.');
    return;
  }
  
  // Mostrar alerta de agradecimiento
  alert(`¡Gracias ${name}! Tu mensaje ha sido enviado.`);
  
  // Resetear el formulario
  form.reset();
}
