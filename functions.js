/* Funciones de la página registro, Sergio López.*/

function validar() {
  var nombre, apellidos, correo, usuario, clave, telefono, expresion;
  nombre = document.getElementById("nombre").value;
  apellidos = document.getElementById("apellidos").value;
  correo = document.getElementById("correo").value;
  clave = document.getElementById("clave1").value;
  telefono = document.getElementById("telefono").value;
  expresion = /^([da-z_.-]+)@([da-z.-]+).([a-z.]{2,6})$/;
  var password1 = document.getElementById("clave1").value;
  var password2 = document.getElementById("clave2").value;

  if (
    nombre === "" ||
    apellidos === "" ||
    correo === "" ||
    clave === "" ||
    telefono === ""
  ) {
    alert("todos los campos son obligatorios");
    return false;
  } else if (nombre.length > 30) {
    alert("nombre demasiado largo");
    return false;
  } else if (apellidos.length > 80) {
    alert("los apellidos son muy largos");
    return false;
  } else if (correo.length > 100) {
    alert("El correo es muy largo");
    return false;
  } else if (expresion.test(correo)) {
    alert("El correo no es valido");
    return false;
  } else if (telefono.length != 9) {
    alert("El telefono es muy largo");
    return false;
  } else if (isNaN(telefono)) {
    alert("El telefono ingresando no es un número");
    return false;
  } else if (password1 != password2) {
    alert("Las contraseñas no coinciden");
    return false;
  }

  document.cookie = `Email=${usuario}`;
  document.cookie = `Contraseña=${clave}`;
  window.location.href = "./home.html";
}




/*Funciones de la Entrada a cargo de Josuè Martín*/
function Comprobar() {
  var UsuariInsertat = $("#UsuariInput").val();
  var ContraInsertat = $("#ContraInput").val();
  expresion = /^([da-z_.-]+)@([da-z.-]+).([a-z.]{2,6})$/;
  if (expresion.test(UsuariInsertat) && UsuariInsertat === "Pepito@gmail.com" && ContraInsertat === "123456X") {
    window.location.href = "./home.html";
  }
  else {
    alert("Nom d'usuari o contrasenya incorrectes");
  }

}

function Redirigir() {
  window.location.href = "./registro.html";
}
