$(document).ready(function (e) {
    /*var firstname = $('#FirstName').val();
    var secondname = $('#LastName').val();
    var email = $('#InputEmail').val();
    var age = $('#Age').val();*/
    var prodId = getParameterByName('prodId');
    $("#IDClient").val(prodId);
    console.log(prodId);
    $("#Mdescription").hide();
    $('#Mcostume').hide(5);
    $('#Mclient').hide(5);
    $('#IDClient').hide();
    $('#IDnumber0').hide();
    $('#IDCostume').hide();
    $('#IDnumber').hide();

    $.getJSON("http://129.151.118.167:8080/api/Costume/all",
        function (data) {
            var client_data = "";
            var select_data = "";
            var cont = 0;
            $.each(data, function (key, value) {
                ID = value.ID;
                client_data += '<a class="dropdown-item" onclick="selectCostume(' + value.id + ')';
                // client_data+='<td>'+value.id+'</td>';
                client_data += '">' + value.name + '</a><div class="dropdown-divider"></div>';
                select_data = `<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown${value.id}"
        role="button" data-toggle="dropdown" aria-haspopup="true"
        aria-expanded="false">
        ${value.name}
        </a>`;
                $('#barra').append(select_data);
                $('#navbarDropdown' + value.id).hide(5);
                cont = value.id;
            });
            $('#client').append(client_data);
            $("#IDnumber").val(cont);
            //clearfield();
        })

    $.getJSON("http://129.151.118.167:8080/api/Client/all",
        function (data) {
            var client_data = "";
            var select_data = "";
            var cont = 0;
            $.each(data, function (key, value) {
                ID = value.ID;
                client_data += '<a class="dropdown-item" onclick="selectClient(' + value.idClient + ')';
                // client_data+='<td>'+value.id+'</td>';
                client_data += '">' + value.name + '</a><div class="dropdown-divider"></div>';
                select_data = `<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown0${value.idClient}"
        role="button" data-toggle="dropdown" aria-haspopup="true"
        aria-expanded="false">
        ${value.name}
        </a>`;
                $('#barra0').append(select_data);
                $('#navbarDropdown0' + value.idClient).hide(5);
                cont = value.idClient;
            });
            $('#client0').append(client_data);
            $("#IDnumber0").val(cont);
            //clearfield();
        })

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
    var idcostume = $('#IDCostume').val();
    var idclient = $('#IDClient').val();

    console.log(Textarea);
    console.log(idcostume);
    console.log(idclient);

    let datos = {
        messageText: Textarea,
        client: {
            idClient: idclient
        },
        costume: {
            id: idcostume
        }
    }

    let datosPeticion = JSON.stringify(datos);
    if (validarEditar()) {
        $.ajax({
            // la URL para la petici??n (url: "url al recurso o endpoint")
            url: "http://129.151.118.167:8080/api/Message/save",

            // la informaci??n a enviar
            // (tambi??n es posible utilizar una cadena de datos)
            //si el metodo del servicio recibe datos, es necesario definir el parametro adicional
            data: datosPeticion,

            // especifica el tipo de petici??n http: POST, GET, PUT, DELETE
            type: 'POST',

            contentType: "application/JSON",

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
    }

    function clearfield() {
        $("#Textarea1").val(" ");

    }
});

function selectCostume(llaveRegistro) {
    console.log(llaveRegistro);
    $('#navbarDropdown').hide(5);
    var idNumber = $('#IDnumber').val();
    console.log(idNumber);
    for (let index = 1; index <= idNumber; index++) {
        if (llaveRegistro == index) {
            $('#navbarDropdown' + llaveRegistro).show(5);
            $("#IDCostume").val(llaveRegistro);
        } else {
            $('#navbarDropdown' + index).hide(5);
        }
    }
}

function selectClient(llaveRegistro) {
    console.log(llaveRegistro);
    $('#navbarDropdown0').hide(5);
    var idNumber = $('#IDnumber0').val();
    console.log(idNumber);
    for (let index = 1; index <= idNumber; index++) {
        if (llaveRegistro == index) {
            $('#navbarDropdown0' + llaveRegistro).show(5);
            $("#IDClient").val(llaveRegistro);
        } else {
            $('#navbarDropdown0' + index).hide(5);
        }
    }
}

function validarEditar() {
    //obtiene valores
    $("#Mdescription").hide();
    $('#Mcostume').hide(5);
    $('#Mclient').hide(5);
    let Textarea = $('#Textarea1').val();
    let idcostume = $('#IDCostume').val();
    let idclient = $('#IDClient').val();
    let errores = "";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if (validaesVacio(idclient)) {
        errores = "messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mclient").show(500);
        $("#nameEdit").focus();
        return false;
    } else if (validaesVacio(idcostume)) {
        errores = "messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mcostume").show(500);
        $("#nameEdit").focus();
        return false;
    } else if (validaesVacio(Textarea)) {
        errores = "messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mdescription").show(500);
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
    alert("Mensaje registrado exitosamente!!")
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