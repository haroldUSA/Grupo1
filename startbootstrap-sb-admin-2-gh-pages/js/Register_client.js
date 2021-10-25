$(document).ready(function (e) {
    $('#ID').hide(5);
});
$('#submitbtn').click(function (e) {
    e.preventDefault()
   // var id = $('#ID').val();
    var firstname = $('#FirstName').val();
    var secondname = $('#LastName').val();
    var email = $('#InputEmail').val();
    var age = $('#Age').val();
    var password = $('#Password').val();

    let datos={
        name: firstname + " " + secondname,
        email: email,
        password: password,
        age: age
    }
   
    let datosPeticion = JSON.stringify(datos);

    $.ajax({
        // la URL para la petición (url: "url al recurso o endpoint")
        url: "http://129.151.118.167:8080/api/Client/save",

        // la información a enviar
        // (también es posible utilizar una cadena de datos)
        //si el metodo del servicio recibe datos, es necesario definir el parametro adicional
        data : datosPeticion,

        // especifica el tipo de petición http: POST, GET, PUT, DELETE
        type: 'POST',

        contentType:"application/JSON",

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

    function clearfield() {
     //   $("#ID").val("");
        $("#FirstName").val("");
        $("#LastName").val("");
        $("#InputEmail").val("");
        $("#Password").val("");
        $("#Age").val("");
    }
});

function mensaje(){
    alert("Usuario creado exitosamente!!!")
}

function redireccionar() {
    var id = $('#ID').val();
    //console.log(id);
    location.href = "/register_message.html?prodId="+id;
}
function getid(){
    $.getJSON("http://129.151.118.167:8080/api/Client/all", 
    function (data) {
        var ID=0;
        $.each(data,function(key,value){
         ID=value.idClient;
        });
        $('#ID').val(ID);
        console.log(ID);
        redireccionar();
        //clearfield();
    })
}

