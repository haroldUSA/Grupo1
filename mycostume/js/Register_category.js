$(document).ready(function (e) {
    $("#Mdescription").hide();
    $("#Mname").hide();
});
$('#submitbtn').click(function (e) {
    e.preventDefault()
    var Textarea = $('#Textarea1').val();
    var Name = $('#Name').val();

    let datos = {
        name: Name,
        description: Textarea
    }

    let datosPeticion = JSON.stringify(datos);
    if (validarEditar()) {
        $.ajax({
            // la URL para la petición (url: "url al recurso o endpoint")
            url: "http://129.151.111.220:8080/api/Category/save",

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
        $("#Textarea1").val("");
        $("#Name").val("");
    }
});

function validarEditar(){
    //obtiene valores
    $("#Mdescription").hide();
    $("#Mname").hide();
    let name = $("#Name").val();
    let description = $("#Textarea1").val();
    let errores="";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if(validaesVacio(name)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mname").show(500);
        $("#nameEdit").focus();
        return false;
    }else if(validaesVacio(description)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mdescription").show(500);
        $("#nameEdit").focus();
        return false;
    }else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }
}

function validaesVacio(dato){
    return !dato.trim().length;
}

function mensaje() {
    alert("Categoria creada exitosamente!!")
}

function redireccionar() {
    console.log("entro");
    location.href = "/table_category.html";;
}
