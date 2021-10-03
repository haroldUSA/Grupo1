$(document).ready(function (e) {
    /*var firstname = $('#FirstName').val();
    var secondname = $('#LastName').val();
    var email = $('#InputEmail').val();
    var age = $('#Age').val();*/



    $.getJSON("https://g3abde25bedbc30-db202109241616.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/costume/costume", 
    function (data) {
        var client_data="";
        $.each(data["items"],function(key,value){
         ID=value.id;   
        client_data+='<tr>';
        client_data+='<td>'+value.id+'</td>';
        client_data+='<td>'+value.brand+'</td>';
        client_data+='<td>'+value.model+'</td>';
        client_data+='<td>'+value.category_id+'</td>';
        client_data+='<td>'+value.name+'</td>';
        client_data+=`<td align="center"><button  style="background-color:#224abe"
        class="rectangular-circle border-6" id="Editbuttom${value.id}"><a onclick="actualizar(${value.id})"
                class="nav-link collapsed" href="#" data-toggle="collapse"
                data-target="#collapsePages${value.id}" aria-expanded="true"
                aria-controls="collapsePages${value.id}"><i
                    class="fas fa-fw fa-edit"></i><span
                    style="color:white">Editar</span></a>
            <div id="collapsePages${value.id}" class="collapse"
                aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div class="bg-white  collapse-inner rounded"
                    align="center">
                    <h6 class="collapse-header" style="color:#224abe">Options:
                    </h6>
                    <a class="collapse-item"
                        >Brand
                    </a>
                    <div class="form-group"><label
                            for="example"></label><input type="text" class="form-control form-control-user" id="Brand${value.id}" placeholder="Brand">
                    </div>                    
                    <a class="collapse-item"
                        >Model
                    </a>
                    <div class="form-group"><label
                            for="example"></label><input type="text" class="form-control form-control-user" id="Model${value.id}" placeholder="Model">
                    </div>
                    <a class="collapse-item"
                        >Category id
                    </a>
                    <div class="form-group"><label
                            for="example"></label><input type="text" class="form-control form-control-user" id="Category_id${value.id}" placeholder="Category id">
                    </div>
                    <a class="collapse-item"
                        >Name
                    </a>
                    <div class="form-group"><label
                            for="example"></label><input type="text" class="form-control form-control-user" id="Name${value.id}" placeholder="Name">
                    </div>
                    <div class="col-sm-6 mb-3 mb-sm-0"><a onclick="editarRegistro(${value.id})"
                            class="btn btn-primary btn-user btn-block ">Update
                            client!</a></div>
                    <div class="collapse-divider"></div>
                </div>
            </div>
        </button>
        <button onclick="deleteMessage(${value.id})" style="background-color:#224abe"
        class="rectangular-circle border-6" id="Deletebuttom${value.id}"><a
        class="nav-link collapsed" href="#" 
        data-target="#collapsePages"><i
            class="fas fa-trash-alt"></i><span
            style="color:white">Delete</span></a></button>
    </td>`
        client_data+='</tr>';
        });
        $('#client').append(client_data);
        $('#idEdit').hide(500);
        //clearfield();
    })

    /* $.get("https://g3abde25bedbc30-db202109241616.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/costume/costume", 
     function (data) {
         console.log('success====:', data);
         //clearfield();
     })*/
/*
     let url = "https://g3abde25bedbc30-db202109241616.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/costume/costume";

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
        url: "https://g3abde25bedbc30-db202109241616.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/costume/costume",

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
    //console.log($("#Textarea"+llaveRegistro).val());
    //crea un objeto javascript
    let datos = {
        id: llaveRegistro,
        brand: $("#Brand"+llaveRegistro).val(),
        model: $("#Model"+llaveRegistro).val(),
        category_id: $("#Category_id"+llaveRegistro).val(),
        name: $("#Name"+llaveRegistro).val()
    }

    //convierte el objeto javascript a json antes de agregarlo a los datos de la petición
    let datosPeticion = JSON.stringify(datos);

    if (validarEditar(llaveRegistro)) {
        $.ajax({
            // la URL para la petición (url: "url al recurso o endpoint")
            url: "https://g3abde25bedbc30-db202109241616.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/costume/costume",

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
    let id = llaveRegistro;
    let brand= $("#Brand"+llaveRegistro).val();
    let model= $("#Model"+llaveRegistro).val();
    let category_id= $("#Category_id"+llaveRegistro).val();
    let name= $("#Name"+llaveRegistro).val();
    let errores="";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if( validaesVacio(brand)) {
        errores="name vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#nameEdit").focus();
        return false;
    }else if( validaesVacio(model)) {
        errores="brand vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#brandEdit").focus();
        return false;
    }else if( validaesVacio(category_id)) {  
        errores="model vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#modelEdit").focus();
        return false;
    }else if( validaesVacio(name)) {  
            errores="model vacio<br>";
            $("#mensajes").html(errores);
            $("#mensajes").show(500);
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
    var messagetext = $('#Textarea').val();

    $.put("https://g3abde25bedbc30-db202109241616.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/costume/costume/", {
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

