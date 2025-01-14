// Obtener elementos del DOM
const entradaUsuario = document.getElementById('entradaUsuario');
const botonAdivinar = document.getElementById('botonAdivinar');
const botonReiniciar = document.getElementById('botonReiniciar');
const mensaje = document.getElementById('mensaje');
const intentosRestantes = document.getElementById('intentos-restantes');
const puntaje = document.getElementById('puntaje');
const historial = document.getElementById('historial');

// Variables del juego
let numeroSecreto = Math.floor(Math.random() * 50) + 1;
let intentos = 5;
let puntajeActual = 0;
let intentosPrevios = [];

// Función para manejar la lógica del juego
botonAdivinar.addEventListener('click', function() {
    const intentoUsuario = parseInt(entradaUsuario.value);

    if (isNaN(intentoUsuario) || intentoUsuario < 1 || intentoUsuario > 50) {
        mensaje.textContent = "Por favor, ingresa un número entre 1 y 50.";
        mensaje.style.color = "red";
        return;
    }

    intentosPrevios.push(intentoUsuario);
    actualizarHistorial();
    
    // Restar intentos
    intentos--;
    intentosRestantes.textContent = intentos;

    if (intentoUsuario === numeroSecreto) {
        puntajeActual += 10;
        puntaje.textContent = puntajeActual;
        mensaje.textContent = `¡Felicidades! Adivinaste el número. El número era ${numeroSecreto}.`;
        mensaje.style.color = "green";
        finalizarJuego();
    } else if (intentoUsuario < numeroSecreto) {
        mensaje.textContent = "¡Más alto!";
        mensaje.style.color = "orange";
    } else {
        mensaje.textContent = "¡Más bajo!";
        mensaje.style.color = "orange";
    }

    if (intentos === 0) {
        mensaje.textContent = `¡Perdiste! El número era ${numeroSecreto}.`;
        mensaje.style.color = "red";
        finalizarJuego();
    }

    entradaUsuario.value = '';
});

// Función para actualizar el historial de intentos
function actualizarHistorial() {
    const li = document.createElement('li');
    li.textContent = `Intento ${intentosPrevios.length}: ${intentosPrevios[intentosPrevios.length - 1]}`;
    historial.appendChild(li);
}

// Función para terminar el juego
function finalizarJuego() {
    botonAdivinar.disabled = true;  // Deshabilitar el botón
    botonReiniciar.style.display = 'inline-block';  // Mostrar botón de reinicio
}

// Función para reiniciar el juego
botonReiniciar.addEventListener('click', function() {
    numeroSecreto = Math.floor(Math.random() * 50) + 1;
    intentos = 10;
    puntajeActual = 0;
    intentosPrevios = [];
    intentosRestantes.textContent = intentos;
    puntaje.textContent = puntajeActual;
    mensaje.textContent = '';
    historial.innerHTML = '';  // Limpiar historial
    botonAdivinar.disabled = false;
    botonReiniciar.style.display = 'none';
    entradaUsuario.value = '';
});

//Funcion para que el texto <h3 id="nombreautor">Nombre del Autor: Pau</h3> salga destacado
// const nombreAutor = document.getElementById('nombreautor');
// nombreAutor.style.color = "blue";
// nombreAutor.style.fontSize = "20px";
// nombreAutor.style.fontWeight = "bold";
// nombreAutor.style.textAlign = "center";
// nombreAutor.style.fontFamily = "Arial";
// nombreAutor.style.textDecoration = "underline";

//Funcion para que el botonReiniciar salga destacado
// botonReiniciar.style.backgroundColor = "red";
// botonReiniciar.style.color = "white";
// botonReiniciar.style.border = "none";
// botonReiniciar.style.padding = "10px 20px";
// botonReiniciar.style.fontSize = "16px";


