$(document).ready(function (e) {
    /*var firstname = $('#FirstName').val();
    var secondname = $('#LastName').val();
    var email = $('#InputEmail').val();
    var age = $('#Age').val();*/

    $('#IDClient').hide();
    $('#IDnumber0').hide();
    $('#IDCostume').hide();
    $('#IDnumber').hide();

    $.getJSON("http://129.151.111.220:8080/api/Message/all", 
    function (data) {
        var client_data="";
        $.each(data,function(key,value){
        client_data+='<tr>';
       // client_data+='<td>'+value.id+'</td>';
        client_data+='<td>'+value.messageText+'</td>';
        client_data+='<td>'+value.costume.name+'</td>';
        client_data+='<td>'+value.client.name+'</td>';
        client_data+=`<td align="center"><button  style="background-color:#224abe"
        class="rectangular-circle border-6" id="Editbuttom${value.idMessage}"><a onclick="actualizar(${value.idMessage})"
                class="nav-link collapsed" href="#" data-toggle="collapse"
                data-target="#collapsePages${value.idMessage}" aria-expanded="true"
                aria-controls="collapsePages${value.idMessage}"><i
                    class="fas fa-fw fa-edit"></i><span
                    style="color:white">Editar</span></a>
            <div id="collapsePages${value.idMessage}" class="collapse"
                aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div class="bg-white  collapse-inner rounded"
                    align="center">
                    <h6 class="collapse-header" style="color:#224abe">Options:
                    </h6>
                    <div class="form-group">
                        <nav class="navbar navbar-expand navbar-light bg-light mb-4">
                            <a class="navbar-brand" href="#">select </a>
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item dropdown" id="barra0${value.idMessage}">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1${value.idMessage}"
                                        role="button" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                        client
                                    </a>
                                    <div id="client0${value.idMessage}"
                                        class="dropdown-menu dropdown-menu-right animated--grow-in"
                                        aria-labelledby="navbarDropdown">
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        <a id="Mclient${value.idMessage}" style="color: red;">this field cannot be blank!</a>
                    </div>    
                    <div class="form-group">
                        <nav class="navbar navbar-expand navbar-light bg-light mb-4">
                            <a class="navbar-brand" href="#">choose</a>
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item dropdown" id="barra${value.idMessage}">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown00${value.idMessage}"
                                            role="button" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            Costume
                                        </a>
                                        <div id="client${value.idMessage}"
                                                class="dropdown-menu dropdown-menu-right animated--grow-in"
                                                aria-labelledby="navbarDropdown">
                                        </div>
                                    </li>
                                </ul>
                        </nav>  
                        <a id="Mcostume${value.idMessage}" style="color: red;">this field cannot be blank!</a>  
                    </div>
                    <a class="collapse-item"
                        >Message</a>    
                    <div class="form-group"><label
                            for="example"></label><textarea class="form-control"
                            id="Textarea${value.idMessage}" rows="3"></textarea>
                            <a id="Mdescription${value.idMessage}" style="color: red;">this field cannot be blank!</a>
                    </div>
                    <div class="col-sm-6 mb-3 mb-sm-0"><a onclick="editarRegistro(${value.idMessage})"
                            class="btn btn-primary btn-user btn-block ">Update
                            Message!</a></div>
                    <div class="collapse-divider"></div>
                </div>
            </div>
        </button>
        <button onclick="deleteMessage(${value.idMessage})" style="background-color:#224abe"
        class="rectangular-circle border-6" id="Deletebuttom${value.idMessage}"><a
        class="nav-link collapsed" href="#" 
        data-target="#collapsePages"><i
            class="fas fa-fw fa-trash-alt"></i><span
            style="color:white">Delete</span></a></button>
    </td>`
        client_data+='</tr>';
        });
        $('#client').append(client_data);
        $('#idEdit').hide(500);
        //clearfield();
    })

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
est=0;
function actualizar(llaveRegistro){
    $("#Deletebuttom"+llaveRegistro).toggle();
    $("#Mdescription"+llaveRegistro).hide();
    $('#Mcostume'+llaveRegistro).hide();
    $('#Mclient'+llaveRegistro).hide();
    if(est==0){
    $.getJSON("http://129.151.111.220:8080/api/Costume/all", 
    function (data) {
        var client_data="";
        var select_data="";
        var cont=0;
        $.each(data,function(key,value){
         ID=value.ID;   
        client_data+='<a class="dropdown-item" onclick="selectCostume('+value.id+','+llaveRegistro+')';
       // client_data+='<td>'+value.id+'</td>';
        client_data+='">'+value.name+'</a><div class="dropdown-divider"></div>';
        select_data=`<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown${value.id}"
        role="button" data-toggle="dropdown" aria-haspopup="true"
        aria-expanded="false">
        ${value.name}
        </a>`;
        $('#barra'+llaveRegistro).append(select_data);
        $('#navbarDropdown'+value.id).hide(5);
        cont=value.id;
        });
        $('#client'+llaveRegistro).append(client_data);
        $("#IDnumber").val(cont);
        //clearfield();
    })

    $.getJSON("http://129.151.111.220:8080/api/Client/all", 
    function (data) {
        var client_data="";
        var select_data="";
        var cont=0;
        $.each(data,function(key,value){
         ID=value.ID;   
        client_data+='<a class="dropdown-item" onclick="selectClient('+value.idClient+','+llaveRegistro+')';
       // client_data+='<td>'+value.id+'</td>';
        client_data+='">'+value.name+'</a><div class="dropdown-divider"></div>';
        select_data=`<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown0${value.idClient}"
        role="button" data-toggle="dropdown" aria-haspopup="true"
        aria-expanded="false">
        ${value.name}
        </a>`;
        $('#barra0'+llaveRegistro).append(select_data);
        $('#navbarDropdown0'+value.idClient).hide(5);
        cont=value.idClient;
        });
        $('#client0'+llaveRegistro).append(client_data);
        $("#IDnumber0").val(cont);
        //clearfield();
    })
    est=1;
}
}

function selectCostume(llaveRegistro,id) {
    console.log(llaveRegistro);
    $('#navbarDropdown00'+id).hide(5);
    var idNumber = $('#IDnumber').val();
    console.log(idNumber);
    for (let index = 1; index <= idNumber; index++) {
        if(llaveRegistro==index){
            $('#navbarDropdown'+llaveRegistro).show(5);
            $("#IDCostume").val(llaveRegistro);
        }else{
            $('#navbarDropdown'+index).hide(5);
        }
    }
}

function selectClient(llaveRegistro,id) {
    console.log(llaveRegistro);
    $('#navbarDropdown1'+id).hide(5);
    var idNumber = $('#IDnumber0').val();
    console.log(idNumber);
    for (let index = 1; index <= idNumber; index++) {
        if(llaveRegistro==index){
            $('#navbarDropdown0'+llaveRegistro).show(5);
            $("#IDClient").val(llaveRegistro);
        }else{
            $('#navbarDropdown0'+index).hide(5);
        }
    }
}

function deleteMessage(llaveRegistro){
    //crea un objeto javascript
    let datos={
        id: llaveRegistro
    }

    //convierte el objeto javascript a json antes de agregarlo a los datos de la petición
    let datosPeticion = JSON.stringify(datos);

    $.ajax({
        // la URL para la petición (url: "url al recurso o endpoint")
        url: "http://129.151.111.220:8080/api/Message",

        // la información a enviar
        // (también es posible utilizar una cadena de datos)
        //si el metodo del servicio recibe datos, es necesario definir el parametro adicional
        data : datosPeticion,

        // especifica el tipo de petición http: POST, GET, PUT, DELETE
        type: 'DELETE',

        contentType:"application/JSON",

        // el tipo de información que se espera de respuesta
        dataType: 'json',

        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success: function (respuesta) {
            //escribe en la consola del desarrollador para efectos de depuración
            console.log(respuesta);
            $("#mensajes").show(1000);
            $("#mensajes").html("Registro eliminado...");
            $("#mensajes").hide(1000);
            location.reload();
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

function editarRegistro(llaveRegistro) {
    console.log(llaveRegistro);
    var Textarea = $('#Textarea'+llaveRegistro).val();
    var idcostume = $('#IDCostume').val();
    var idclient = $('#IDClient').val();
    console.log(Textarea);
    console.log(idcostume);
    console.log(idclient);
    //crea un objeto javascript
    let datos = {
        idMessage: llaveRegistro,
        messageText: Textarea,
        client: {
            idClient: idclient
        },
        costume: {
            id: idcostume 
        }
    }

    //convierte el objeto javascript a json antes de agregarlo a los datos de la petición
    let datosPeticion = JSON.stringify(datos);

    if (validarEditar(llaveRegistro)) {
        $.ajax({
            // la URL para la petición (url: "url al recurso o endpoint")
            url: "http://129.151.111.220:8080/api/Message/update",

            // la información a enviar
            // (también es posible utilizar una cadena de datos)
            //si el metodo del servicio recibe datos, es necesario definir el parametro adicional
            data: datosPeticion,

            // especifica el tipo de petición http: POST, GET, PUT, DELETE
            type: 'PUT',

            contentType: "application/JSON",

            // el tipo de información que se espera de respuesta
            //dataType: 'json',

            // código a ejecutar si la petición es satisfactoria;
            // la respuesta es pasada como argumento a la función
            success: function (respuesta) {
                //escribe en la consola del desarrollador para efectos de depuración
                console.log(respuesta);
                $("#mensajes").show(1000);
                $("#mensajes").html("Registro actualizado...");
                $("#mensajes").hide(1000);
                location.reload();
              //  listar();
              //  estadoInicial();
            },

            // código a ejecutar si la petición falla;
            // son pasados como argumentos a la función
            // el objeto de la petición en crudo y código de estatus de la petición
            error: function (xhr, status) {
                $("#mensajes").show(1000);
                $("#mensajes").html("Error peticion Post..." + status);
                //$("#mensajes").hide(1000);
            }
        });
    }
}

function validarEditar(llaveRegistro){
    //obtiene valores
    $("#Mdescription"+llaveRegistro).hide();
    $('#Mcostume'+llaveRegistro).hide();
    $('#Mclient'+llaveRegistro).hide();
    let messagetext = $("#Textarea"+llaveRegistro).val();
    let idcostume = $('#IDCostume').val();
    let idclient = $('#IDClient').val();
    let errores="";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if( validaesVacio(idclient)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mclient"+llaveRegistro).show(500);
        $("#nameEdit").focus();
        return false;
    }else if( validaesVacio(idcostume)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mcostume"+llaveRegistro).show(500);
        $("#nameEdit").focus();
        return false;
    }else if( validaesVacio(messagetext)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mdescription"+llaveRegistro).show(500);
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

/*$('#submitbtn1').click(function (e) {
    e.preventDefault()
    console.log(ID);
    console.log("entro");
    var messagetext = $('#Textarea').val();

    $.put("https://g3abde25bedbc30-db202109241616.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message/", {
        id: 1,
        messagetext: messagetext
    }, function (response) {
        console.log('success====:', response)
        //clearfield();
    })

    function clearfield(){
      $("#Textarea").val(" ");
    }
});*/

