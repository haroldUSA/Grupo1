$(document).ready(function (e) {
    /*var firstname = $('#FirstName').val();
    var secondname = $('#LastName').val();
    var email = $('#InputEmail').val();
    var age = $('#Age').val();*/



    $.getJSON("http://129.151.118.167:8080/api/Client/all", 
    function (data) {
        var client_data="";
        $.each(data,function(key,value){
        client_data+='<tr>';
        //client_data+='<td>'+value.idClient+'</td>';
        client_data+='<td>'+value.name+'</td>';
        client_data+='<td>'+value.email+'</td>';
       // client_data+='<td>'+value.password+'</td>';
        client_data+='<td>'+value.age+'</td>';
        client_data+=`<td align="center"><button  style="background-color:#224abe"
        class="rectangular-circle border-6" id="Editbuttom${value.idClient}"><a onclick="actualizar(${value.idClient})"
                class="nav-link collapsed" href="#" data-toggle="collapse"
                data-target="#collapsePages${value.idClient}" aria-expanded="true"
                aria-controls="collapsePages${value.idClient}"><i
                    class="fas fa-fw fa-edit"></i><span
                    style="color:white">Editar</span></a>
            <div id="collapsePages${value.idClient}" class="collapse"
                aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div class="bg-white  collapse-inner rounded"
                    align="center">
                    <h6 class="collapse-header" style="color:#224abe">Options:
                    </h6>
                    <a class="collapse-item"
                        >Name
                    </a>
                    <div class="form-group"><label
                            for="example"></label><input type="text" class="form-control form-control-user" id="Name${value.idClient}" placeholder="Name">
                            <a id="Mname${value.idClient}" style="color: red;">this field cannot be blank!</a>
                    </div>                    
                    <a class="collapse-item"
                        >Email
                    </a>
                    <div class="form-group"><label
                            for="example"></label><input type="text" class="form-control form-control-user" id="Email${value.idClient}" placeholder="Email">
                            <a id="Memail${value.idClient}" style="color: red;">this field cannot be blank!</a>
                    </div>
                    <a class="collapse-item"
                        >Age
                    </a>
                    <div class="form-group"><label
                            for="example"></label><input type="text" class="form-control form-control-user" id="Age${value.idClient}" placeholder="Age">
                            <a id="Mage${value.idClient}" style="color: red;">this field cannot be blank!</a>
                    </div>
                    <div class="col-sm-6 mb-3 mb-sm-0"><a onclick="editarRegistro(${value.idClient})"
                            class="btn btn-primary btn-user btn-block ">Update
                            client!</a></div>
                    <div class="collapse-divider"></div>
                </div>
            </div>
        </button>
        <button onclick="deleteClient(${value.idClient})" style="background-color:#224abe"
        class="rectangular-circle border-6" id="Deletebuttom${value.idClient}"><a
        class="nav-link collapsed" href="#" 
        data-target="#collapsePages"><i
            class="fas fa-trash-alt"></i><span
            style="color:white">Delete</span></a></button>
    </td>`
        client_data+='</tr>';
        });
        $('#client').append(client_data);
        $('#idEdit').hide();
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

function actualizar(llaveRegistro){
    $("#Deletebuttom"+llaveRegistro).toggle();
    $("#Memail"+llaveRegistro).hide();
    $("#Mname"+llaveRegistro).hide();
    $("#Mage"+llaveRegistro).hide();
}

function deleteClient(llaveRegistro){
    //crea un objeto javascript
    let datos={
        id: llaveRegistro
    }

    //convierte el objeto javascript a json antes de agregarlo a los datos de la petición
    let datosPeticion = JSON.stringify(datos);

    $.ajax({
        // la URL para la petición (url: "url al recurso o endpoint")
        url: "http://129.151.118.167:8080/api/Client/"+llaveRegistro,

        // la información a enviar
        // (también es posible utilizar una cadena de datos)
        //si el metodo del servicio recibe datos, es necesario definir el parametro adicional
//        data : datosPeticion,

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
    //console.log($("#Textarea"+llaveRegistro).val());
    //crea un objeto javascript
    let datos = {
        idClient: llaveRegistro,
        name: $("#Name"+llaveRegistro).val(),
        email: $("#Email"+llaveRegistro).val(),
        age: $("#Age"+llaveRegistro).val()
    }

    //convierte el objeto javascript a json antes de agregarlo a los datos de la petición
    let datosPeticion = JSON.stringify(datos);

    if (validarEditar(llaveRegistro)) {
        $.ajax({
            // la URL para la petición (url: "url al recurso o endpoint")
            url: "http://129.151.118.167:8080/api/Client/update",

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
    $("#Memail"+llaveRegistro).hide();
    $("#Mname"+llaveRegistro).hide();
    $("#Mage"+llaveRegistro).hide();
    let name= $("#Name"+llaveRegistro).val();
    let email= $("#Email"+llaveRegistro).val();
    let age= $("#Age"+llaveRegistro).val();
    let errores="";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if( validaesVacio(name)) {
        errores="name vacio<br>";
        $("#mensajes").html(errores);
        $("#Mname"+llaveRegistro).show(500);
        $("#nameEdit").focus();
        return false;
    }else if( validaesVacio(email)) {
        errores="brand vacio<br>";
        $("#mensajes").html(errores);
        $("#Memail"+llaveRegistro).show(500);
        $("#brandEdit").focus();
        return false;
    }else if( validaesVacio(age)) {  
        errores="model vacio<br>";
        $("#mensajes").html(errores);
        $("#Mage"+llaveRegistro).show(500);
        $("#modelEdit").focus();
        return false;
    }else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}

function validaesVacio(dato){
    return !dato.trim().length;
}

/*$('#submitbtn1').click(function (e) {
    e.preventDefault()
    console.log(ID);
    console.log("entro");
    var Clienttext = $('#Textarea').val();

    $.put("https://g3abde25bedbc30-db202109241616.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client/", {
        id: 1,
        Clienttext: Clienttext
    }, function (response) {
        console.log('success====:', response)
        //clearfield();
    })

    function clearfield(){
      $("#Textarea").val(" ");
    }
});*/

