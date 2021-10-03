$('#submitbtn').click(function (e) {
    e.preventDefault()
    var Textarea = $('#Textarea1').val();
    var id = $('#ID').val();

    $.post("https://g3abde25bedbc30-db202109241616.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message", {
        id: id ,
        messagetext: Textarea 
    }, function (response) {
        console.log('success====:', response)
        clearfield();
        mensaje();
        setTimeout("redireccionar()", 3000);
    })

    function clearfield(){
      $("#Textarea1").val(" ");

    }
});


function mensaje(){
    alert("Mensaje registrado exitosamente!!")
}

function redireccionar() {
    console.log("entro");
    location.href = "/table_clientes.html";;
}
