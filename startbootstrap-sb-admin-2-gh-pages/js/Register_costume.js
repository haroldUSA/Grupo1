$('#submitbtn').click(function (e) {
    e.preventDefault()
    var id = $('#ID').val();
    var brand = $('#Brand').val();
    var model = $('#Model').val();
    var category_id = $('#Category_id').val();
    var name = $('#Name').val();
    console.log(brand);
    console.log(model);
    console.log(category_id);
    console.log(name);

    let datos={
        id: id,
        brand: brand,
        model: model,
        category_id: category_id,
        name: name
    }

    let datosPeticion = JSON.stringify(datos);

    $.ajax({
        // la URL para la petición (url: "url al recurso o endpoint")
        url: "http://129.151.111.220:8080/api/Costume/save",

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
            //clearfield();
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

    function clearfield(){
      $("#ID").val("");
      $("#Brand").val("");
      $("#Model").val("");
      $("#Category_id").val("");
      $("#Name").val("");
    }
});


function mensaje(){
    alert("Disfraz registrado exitosamente!!")
}

function redireccionar() {
    console.log("entro");
    location.href = "/register_message.html";;
}