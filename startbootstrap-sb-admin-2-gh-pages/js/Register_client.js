$('#submitbtn').click(function (e) {
    e.preventDefault()
    var id = $('#ID').val();
    var firstname = $('#FirstName').val();
    var secondname = $('#LastName').val();
    var email = $('#InputEmail').val();
    var age = $('#Age').val();

    $.post("https://g3abde25bedbc30-db202109241616.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client", {
        id: id,
        name: firstname + " " + secondname,
        email: email,
        age: age
    }, function (response) {
        console.log('success====:', response)
        mensaje();
        setTimeout("redireccionar()", 3000);
    })

    function clearfield() {
        $("#ID").val("");
        $("#FirstName").val("");
        $("#LastName").val("");
        $("#InputEmail").val("");
        $("#Age").val("");
    }
});

function mensaje(){
    alert("Usuario creado exitosamente!!!")
}

function redireccionar() {
    console.log("entro");
    location.href = "/register_costume.html";;
}

