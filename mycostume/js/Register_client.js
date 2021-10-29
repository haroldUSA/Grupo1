$(document).ready(function (e) {
    $('#ID').hide(5);
    $('#Mname').hide(5);
    $('#Memail').hide(5);
    $('#Mage').hide(5);
    $('#Mpassword').hide(5);
});
$('#submitbtn').click(function (e) {
    e.preventDefault()
    // var id = $('#ID').val();
    var firstname = $('#FirstName').val();
    var secondname = $('#LastName').val();
    var email = $('#InputEmail').val();
    var age = $('#Age').val();
    var password = $('#Password').val();

    let datos = {
        name: firstname + " " + secondname,
        email: email,
        password: password,
        age: age
    }

    let datosPeticion = JSON.stringify(datos);
    if (validarEditar()) {
        $.ajax({
            // la URL para la petición (url: "url al recurso o endpoint")
            url: "http://129.151.118.167:8080/api/Client/save",

            // la información a enviar
            // (también es posible utilizar una cadena de datos)
            //si el metodo del servicio recibe datos, es necesario definir el parametro adicional
            data: datosPeticion,

            // especifica el tipo de petición http: POST, GET, PUT, DELETE
            type: 'POST',

            contentType: "application/JSON",

            // el tipo de información que se espera de respuesta
            dataType: 'json',

            // código a ejecutar si la petición es satisfactoria;
            // la respuesta es pasada como argumento a la función
            success: function (respuesta) {
                //escribe en la consola del desarrollador para efectos de depuración
                console.log(respuesta);
                $("#mensajes").show(1000);
                $("#mensajes").html("Registro Agregado...");
                $("#mensajes").hide(1000);
                location.reload();
                clearfield();
                mensaje();
                //getid();
                //listar();
            },

            // código a ejecutar si la petición falla;
            // son pasados como argumentos a la función
            // el objeto de la petición en crudo y código de estatus de la petición
            error: function (xhr, status) {
                $("#mensajes").html("Ocurrio un problema al ejecutar la petición..." + status);
                $("#mensajes").hide(1000);
            }
        });
    }

    function clearfield() {
        //   $("#ID").val("");
        $("#FirstName").val("");
        $("#LastName").val("");
        $("#InputEmail").val("");
        $("#Password").val("");
        $("#Age").val("");
    }
});

function validarEditar() {
    $('#Mname').hide(5);
    $('#Memail').hide(5);
    $('#Mpassword').hide(5);
    //obtiene valores
    let firstname = $('#FirstName').val();
    let secondname = $('#LastName').val();
    let email = $('#InputEmail').val();
    let age = $('#Age').val();
    let password = $('#Password').val();
    let errores = "";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if (validaesVacio(firstname)) {
        errores = "messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mname").show(500);
        $("#nameEdit").focus();
        return false;
    } else if (validaesVacio(secondname)) {
        errores = "messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mname").show(500);
        $("#nameEdit").focus();
        return false;
    } else if (validaesVacio(email)) {
        errores = "messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Memail").show(500);
        $("#nameEdit").focus();
        return false;
    } else if (validaesVacio(age)) {
        errores = "messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Memail").show(500);
        $("#nameEdit").focus();
        return false;
    } else if (validaesVacio(password)) {
        errores = "messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mpassword").show(500);
        $("#nameEdit").focus();
        return false;
    } else {
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }
}

function validaesVacio(dato) {
    return !dato.trim().length;
}

function mensaje() {
    alert("Usuario creado exitosamente!!!")
}

function redireccionar() {
    var id = $('#ID').val();
    //console.log(id);
    location.href = "/register_message.html?prodId=" + id;
}

function getid() {
    $.getJSON("http://129.151.118.167:8080/api/Client/all",
        function (data) {
            var ID = 0;
            $.each(data, function (key, value) {
                ID = value.idClient;
            });
            $('#ID').val(ID);
            console.log(ID);
            redireccionar();
            //clearfield();
        })
}

