$(document).ready(function (e) {
    /*var firstname = $('#FirstName').val();
    var secondname = $('#LastName').val();
    var email = $('#InputEmail').val();
    var age = $('#Age').val();*/
    var prodId = getParameterByName('prodId');
    $("#IDReservation").val(prodId);
    console.log(prodId);
    $('#IDReservation').hide();

   /* console.log("entro");
    $.getJSON("http://129.151.118.167:8080/api/Category/all", 
    function (data) {
        var client_data="";
        $.each(data,function(key,value){
         ID=value.ID;   
        client_data+='<option value="';
       // client_data+='<td>'+value.id+'</td>';
        client_data+=value.id+'">'+value.name+'</option>';
        });
        $('#client').append(client_data);
        $('#idEdit').hide(500);
        //clearfield();
    })*/

    /* $.get("https://g3abde25bedbc30-db202109241616.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client", 
     function (data) {
         console.log('success====:', data);
         //clearfield();
     })*/
/*
     let url = "https://g3abde25bedbc30-db202109241616.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client";

    fetch(url)
        .then(res => res.json())
        .then(out =>
            console.log('Checkout this JSON! ', out))
        .catch(err => throwerr);
*/
    function clearfield() {
        $("#Firstname").val(" ");
        $("#Lastname").val(" ");
        $("#InputEmail").val(" ");
        $("#Age").val("");
    }
});

$('#submitbtn').click(function (e) {
    e.preventDefault()
    var Textarea = $('#Textarea1').val();
    var idreservation = $('#IDReservation').val();
    const rbs = document.querySelectorAll('input[name="estrellas"]');
    var cont=0;
    for (const rb of rbs) {
        cont=cont+1;
        if (rb.checked) {
            var stars = 6-$('#radio'+cont).val();
           // var stars=rb.value;
            console.log(stars);
            break;
        }
    }
   /* for (let index = 1; index <= 5; index++) {
        if($("#radio"+index).prop("checked", true)){
            var stars = $('#radio'+index).val();
            console.log(stars);
        }
    }      */        
     console.log(Textarea);
     console.log(stars);
     console.log(idreservation);

    let datos={
        messageText: Textarea,
        stars:stars, 
        reservation: {
            idReservation: idreservation
        }
    }

    let datosPeticion = JSON.stringify(datos);

    $.ajax({
        // la URL para la petici??n (url: "url al recurso o endpoint")
        url: "http://129.151.118.167:8080/api/Score/save",

        // la informaci??n a enviar
        // (tambi??n es posible utilizar una cadena de datos)
        //si el metodo del servicio recibe datos, es necesario definir el parametro adicional
        data : datosPeticion,

        // especifica el tipo de petici??n http: POST, GET, PUT, DELETE
        type: 'POST',

        contentType:"application/JSON",

        // el tipo de informaci??n que se espera de respuesta
        dataType: 'json',

        // c??digo a ejecutar si la petici??n es satisfactoria;
        // la respuesta es pasada como argumento a la funci??n
        success: function (respuesta) {
            //escribe en la consola del desarrollador para efectos de depuraci??n
            console.log(respuesta);
            $("#mensajes").show(1000);
            $("#mensajes").html("Registro Agregado...");
            $("#mensajes").hide(1000);
            //location.reload();
            clearfield();
             mensaje();
            //listar();
        },

        // c??digo a ejecutar si la petici??n falla;
        // son pasados como argumentos a la funci??n
        // el objeto de la petici??n en crudo y c??digo de estatus de la petici??n
        error: function (xhr, status) {
            $("#mensajes").html("Ocurrio un problema al ejecutar la petici??n..." + status);
            $("#mensajes").hide(1000);
        }
    });

    function clearfield(){
      $("#Textarea1").val(" ");

    }
});

function mensaje(){
    alert("Registro creado exitosamente!!")
}

function redireccionar() {
    console.log("entro");
    location.href = "/table_clientes.html";;
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}