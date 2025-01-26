// Fecha de destino para el temporizador (año, mes, día, hora, minuto, segundo)
const fechaDestino = new Date("2025-02-02T23:45:59");

function actualizarTemporizador() {
  const ahora = new Date();
  const diferencia = fechaDestino - ahora;

  // Calcular días, horas, minutos y segundos
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  // Mostrar los valores en el HTML
  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;

  // Si ya ha llegado a la fecha, muestra un mensaje
  if (diferencia <= 0) {
    clearInterval(intervalo); // Detener el temporizador
    document.getElementById("temporizador").innerHTML = "<h2>¡La cuenta regresiva ha terminado!</h2>";
  }
}

// Actualizar el temporizador cada segundo
const intervalo = setInterval(actualizarTemporizador, 1000);

// Ejecutar la función una vez al cargar para mostrar los valores de inmediato
actualizarTemporizador();
