
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

function DevolverPedido(){

    alert("Buenos dias\n Se te va a buscar documentación con:\n Descripción: "+ $("#TextInput").val()+"\n De extensión: " + $("#media option:selected").text() + "\n A la dirección de correo: " + $("#staticEmail").val())
}