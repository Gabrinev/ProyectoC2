/*Funciones de la Entrada a cargo de Josuè Martín*/
function Comprobar() {
  var UsuariInsertat = $("#UsuariInput").val();
  var ContraInsertat = $("#ContraInput").val();
  console.log("Hola");
  if (UsuariInsertat === "Pepito" && ContraInsertat === "123456X") {
    document.cookie = "UsuariInsertat=Pepito; Contrasenya=123456X";
    window.location.href = "/home.html";
  }
  if (UsuariInsertat != "Pepito" && ContraInsertat != "123456X") {
    alert("Nom d'usuari o contrasenya incorrectes");
  }
  if (UsuariInsertat === "Pepito" && ContraInsertat != "123456X") {
    alert("Contrasenya incorrecta");
  }
}

function Redirigir() {
  window.location.href = "./registro.html";
}
