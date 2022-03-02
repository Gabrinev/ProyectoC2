/* Funciones de la página registro, Sergio López.*/

function validar() {
  var nombre, apellidos, correo, usuario, clave, telefono, expresion;
  nombre = document.getElementById("nombre").value;
  apellidos = document.getElementById("apellidos").value;
  correo = document.getElementById("correo").value;
  clave = document.getElementById("clave1").value;
  telefono = document.getElementById("telefono").value;
  expresion = /^([da-z_.-]+)@([da-z.-]+).([a-z.]{2,6})$/;
  var contra1 = document.getElementById("clave1").value;
  var contra2 = document.getElementById("clave2").value;

  if (
    nombre === "" ||
    apellidos === "" ||
    correo === "" ||
    usuario === "" ||
    clave === "" ||
    telefono === ""
  ) {
    alert("todos los campos son obligatorios");
    return false;
  } else if (nombre.length > 23) {
    alert("nombre demasiado largo");
    return false;
  } else if (apellidos.length > 23) {
    alert("los apellidos son muy largos");
    return false;
  } else if (correo.length > 100) {
    alert("El correo es muy largo");
    return false;
  } else if (!expresion.test(correo)) {
    alert("El correo no es valido");
    return false;
  } else if (telefono.length != 9) {
    alert("El telefono no es correcto");
    return false;
  } else if (isNaN(telefono)) {
    alert("El telefono ingresando no es un número");
    return false;
  } else if (contra1 != contra2){
    alert("Las contraseñas no coinciden");
    return false;
  }

  document.cookie = `Email=${correo}`;
  document.cookie = `Contraseña=${clave}`;
  window.location.href = "./home.html";
}




/*Funciones de la Entrada a cargo de Josuè Martín*/
function Comprobar() {
  var UsuariInsertat = $("#UsuariInput").val();
  var ContraInsertat = $("#ContraInput").val();
  if (UsuariInsertat === "pepito@gmail.com" && ContraInsertat === "123456X") 
  {   
    document.cookie = `Usuario=pepito@gmail.com`;
    document.cookie = `Contraseña=123456X`;
    window.location.href = "./home.html";
  }
  else
  {
    alert("Nom d'usuari o contrasenya incorrectes");
  }
 
}

function Redirigir() {
  window.location.href = "./registro.html";
}


function GetCookie() {
  let tenemoscookies = document.cookie;
  console.log(tenemoscookies);
  if (tenemoscookies == "") {
    alert("Necesita registrarse para visualizar esta página");
    window.location.href = "./registro.html";
  }
}

