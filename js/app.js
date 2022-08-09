
let numero = 0;

let jugar = function () {
  numero = Math.ceil(Math.random() * 10);
  document.querySelector("#play").disabled = true;
 
};

function probarNumero() {
  let numeroJugador = document.getElementById("numero_jugador").value;
  

  if (numeroJugador == numero) {
    alert("GANASTE");
    document.getElementById("numero_jugador").value = "";
    document.getElementById("numero_jugador").focus();

    document.querySelector("#play").disabled = false;
  } else if (numeroJugador > numero) {
    alert("El número ingresado es MAYOR que el número mágico");
    document.getElementById("numero_jugador").select();
  } else {
    alert("El número ingresado es MENOR que el número mágico");
    document.getElementById("numero_jugador").select();
  }
}