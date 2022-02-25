/*Funciones de la Entrada a cargo de Josuè Martín*/
function Comprobar() 
{
    var UsuariInsertat = $("#UsuariInput").val()
    var ContraInsertat = $("#ContraInput").val()
    console.log("Hola")
    if(UsuariInsertat === "Pepito" && ContraInsertat === "123456X")
    {
        alert("Continui")
    }
    else
    {
        alert("Nom d'usuari o contrasenya incorrectes")
    }
   
}

