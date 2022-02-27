function verificarPasswords(){
   
    pass1 = document.getElementById('pswd1');
    pass2 = document.getElementById('paswd2');

    if(paswd1.value != paswd2.value){

        document.getElementById('error').classList.add("mostrar");

        return false;

    }else{

        document.getElementById('error').classList.remove("mostrar");

        document.getElementById('ok').classList.remove('ocultar');

        document.getElementById('login').disabled = true;


        setTimeout(function() {
            location.reload();
        }, 3000);

        return true;
    }


}

function validarEmail(elemento){

  var texto = document.getElementById(elemento.id).value;
  var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  
  if (!regex.test(texto)) {
    document.getElementById('error').classList.remove("mostrar");
  } else {
    document.getElementById('ok').classList.remove('ocultar');
  }

}

function nif(dni) {
    var numero
    var letr
    var letra
    var expresion_regular_dni
   
    expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
   
    if(expresion_regular_dni.test (dni) == true){
       numero = dni.substr(0,dni.length-1);
       letr = dni.substr(dni.length-1,1);
       numero = numero % 23;
       letra='TRWAGMYFPDXBNJZSQVHLCKET';
       letra=letra.substring(numero,numero+1);
      if (letra!=letr.toUpperCase()) {
         alert('Dni erroneo, la letra del NIF no se corresponde');
       }else{
         alert('Dni correcto');
       }
    }else{
       alert('Dni erroneo, formato no válido');
     }
  }

      // Validación de DNI: Comprueba si el DNI es correcto.
      if(formulario.dni.value.length>0){
        
        //Recogemos el valor del DNI en una variable.
        var dni = formulario.dni.value;
            
        // En caso que ponga el DNI con guión, se suprime.
        if((dni.length==10)&&(dni.indexOf('-') != -1)){            
            dni = dni.replace('-', '');
        }
        
        // En caso que ponga el guión pero le faltan números de identificación
        if(((formulario.dni.value.length<10)&&(formulario.dni.value.length>10))&&(formulario.dni.value.indexOf('-') != -1)){            
          alert("Debe de escribir un DNI correcto");
          return false;    
        }                
 
        //Se separan los números de la letra
        var letraDNI = dni.substring(8, 9).toUpperCase();
        var numDNI = parseInt(dni.substring(0, 8));
        
        //Se calcula la letra correspondiente al número
        var letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];
        var letraCorrecta = letras[numDNI % 23];
 
        if(letraDNI!= letraCorrecta){
          alert("Debe de escribir un DNI correcto");
          return false;    
        }
    }else{
          alert('Falta por rellenar el campo "DNI"');
          return false;                
    }