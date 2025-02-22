// EJERCICIO NRO 1
let luna = document.getElementById("imagen");

function borde() {
  if (luna.style.border) {
    luna.style.border = "";
  } else {
    luna.style.border = "30px solid yellow";
  }
}

// EJERCICIO NRO 2

function calculo() {
  let cascoA = Number(document.getElementById("helmet1").value);
  let cascoB = Number(document.getElementById("helmet2").value);
  let cascoC = Number(document.getElementById("helmet3").value);
  let cascoD = Number(document.getElementById("helmet4").value);
  let cascoE = Number(document.getElementById("helmet5").value);
  let cascoF = Number(document.getElementById("helmet6").value);

  let total = cascoA + cascoB + cascoC + cascoD + cascoE + cascoF;
  let usuarioMensaje = document.getElementById("mensajeUsuario");

  if (total <= 10) {
    usuarioMensaje.innerText = " Llevas " + total + " cascos";
  } else {
    usuarioMensaje.innerText = "Llevas demasiados cascos";
  }
}

// EJERCICIO Nº 3

function check() {
  let digit1 = document.getElementById("digit1").value;
  let digit2 = document.getElementById("digit2").value;
  let digit3 = document.getElementById("digit3").value;

  let password = digit1 + digit2 + digit3;
  let aprobacion1 = document.querySelector(".aprobacion");

  if (password === "911") {
    aprobacion1.innerText = "Password 1 correcto";
  } else if (password === "714") {
    aprobacion1.innerText = "Password 2 correcto";
  } else {
    aprobacion1.innerText = "Password incorrecto";
  }
}
