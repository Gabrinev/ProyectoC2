function validar(){
   var nombre,apellidos,correo,usuario,clave,telefono,expresion;
   nombre = document.getElementById("nombre").value;
   apellidos = document.getElementById("apellidos").value;
   correo = document.getElementById("correo").value;
   usuario = document.getElementById("usuario").value;
   clave = document.getElementById("clave").value;
   telefono = document.getElementById("telefono").value;
   expresion = /^([da-z_.-]+)@([da-z.-]+).([a-z.]{2,6})$/;

   if(nombre === "" || apellidos === "" || correo === "" || usuario === "" || clave === "" || telefono === ""){
       alert("todos los campos son obligatorios");
       return false;
   }

   else if(nombre.length>30){
    alert("nombre demasiado largo");
    return false;
   }

   else if(apellidos.length>80){
    alert("los apellidos son muy largos");
    return false;
   }
   else if(correo.length>100){
    alert("El correo es muy largo");
    return false;
}
else if(!expresion.test(correo)){
    alert("El correo no es valido");
    return false;
}
else if(usuario.length>29 || clave.length>20){
    alert("El usuario y la clave solo debe tener 20 cadracteres como maximo");
    return false;
}
else if(telefono.length>10){
    alert("El telefono es muy largo");
    return false;
}

else if(isNaN(telefono)){
    alert("El telefono ingresando no es un número");
    return false;
}
 function Entrar(){
    
    if(nombre.value !=0 || apellidos.value !=0 || correo.value !=0 ){
        window.location.href="/Entrar.html";
    }
 }
}