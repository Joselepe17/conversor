// Guardamos en variables los elementos de la página que vamos a usar.
// document.getElementById busca un elemento por su id del HTML.
const campoGrados = document.getElementById("grados");
const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");

// Esta función hace la conversión y muestra el resultado.
function convertir() {
  // .value devuelve el texto escrito; Number lo convierte en número.
  const celsius = Number(campoGrados.value);

  // Si el campo está vacío, avisamos y salimos de la función.
  if (campoGrados.value === "") {
    resultado.textContent = "Escribe un número.";
    return;
  }

  // Fórmula: Fahrenheit = Celsius * 9 / 5 + 32
  const fahrenheit = celsius * 9 / 5 + 32;

  // toFixed(1) deja solo un decimal para que el resultado sea más limpio.
  resultado.textContent = celsius + " °C = " + fahrenheit.toFixed(1) + " °F";
}

// Cuando se hace clic en el botón, se ejecuta la función convertir.
boton.addEventListener("click", convertir);
