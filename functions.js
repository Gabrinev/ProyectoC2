
function ModifyCorreo () {
$("#defaultCheck1").click(function(){
    if (this.checked){
    $("#staticEmail").attr("disabled", false)
}
    else{
        $("#staticEmail").attr("disabled", true)

    }
    return;
}
)
return;
};

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

