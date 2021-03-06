$(document).ready(function (e) {
    /*var firstname = $('#FirstName').val();
    var secondname = $('#LastName').val();
    var email = $('#InputEmail').val();
    var age = $('#Age').val();*/


    $.getJSON("http://129.151.118.167:8080/api/Category/all", 
    function (data) {
        var client_data=""; 
        $.each(data,function(key,value){
        client_data+='<tr>';
       // client_data+='<td>'+value.id+'</td>';
        client_data+='<td>'+value.name+'</td>';
        client_data+='<td>'+value.description+'</td>';
        client_data+='<td>';
        client_data+='<ol>';
        $.each(value.costumes,function(key,value2){
            client_data+='<li>'+value2.name+'</li>';
            });
        client_data+='</ol>';
        client_data+='</td>';           
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
                        >Name:
                    </a>
                    <div class="form-group"><label
                            for="example"></label><input type="text" class="form-control form-control-user" id="Name${value.id}" placeholder="Name">
                    <a id="Mname${value.id}" style="color: red;">this field cannot be blank!</a>  
                    </div>         
                    <a class="collapse-item"
                            >Description:
                        </a>
                        <div class="form-group"><label
                                for="example"></label><textarea class="form-control"
                                id="Textarea${value.id}" rows="3" placeholder="Description"></textarea>
                                <a id="Mdescription${value.id}" style="color: red;">this field cannot be blank!</a>              
                    </div>      
                    <div class="col-sm-6 mb-3 mb-sm-0"><a onclick="editarRegistro(${value.id})"
                            class="btn btn-primary btn-user btn-block ">Update
                            Category!</a></div>
                    <div class="collapse-divider"></div>
                </div>
            </div>
        </button>
        <button onclick="deleteCategory(${value.id})" style="background-color:#224abe"
        class="rectangular-circle border-6" id="Deletebuttom${value.id}"><a
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

function actualizar(llaveRegistro){
    $("#Deletebuttom"+llaveRegistro).toggle();
    $("#Mdescription"+llaveRegistro).hide();
    $("#Mname"+llaveRegistro).hide();
}

function deleteCategory(llaveRegistro){
    //crea un objeto javascript
    console.log(llaveRegistro);
    let datos={
        id: llaveRegistro
    }

    //convierte el objeto javascript a json antes de agregarlo a los datos de la petici??n
    let datosPeticion = JSON.stringify(datos);

    $.ajax({
        // la URL para la petici??n (url: "url al recurso o endpoint")
        url: "http://129.151.118.167:8080/api/Category/"+llaveRegistro,

        // la informaci??n a enviar
        // (tambi??n es posible utilizar una cadena de datos)
        //si el metodo del servicio recibe datos, es necesario definir el parametro adicional
      //  data : datosPeticion,

        // especifica el tipo de petici??n http: POST, GET, PUT, DELETE
        type: 'DELETE',

        contentType:"application/JSON",

        // el tipo de informaci??n que se espera de respuesta
        dataType: 'json',

        // c??digo a ejecutar si la petici??n es satisfactoria;
        // la respuesta es pasada como argumento a la funci??n
        success: function (respuesta) {
            //escribe en la consola del desarrollador para efectos de depuraci??n
            console.log(respuesta);
            $("#mensajes").show(1000);
            $("#mensajes").html("Registro eliminado...");
            $("#mensajes").hide(1000);
            location.reload();
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

function editarRegistro(llaveRegistro) {
    console.log(llaveRegistro);
    console.log($("#Textarea"+llaveRegistro).val());
    //crea un objeto javascript
    let datos = {
        id: llaveRegistro,
        name: $("#Name"+llaveRegistro).val(),
        description: $("#Textarea"+llaveRegistro).val()
    }

    //convierte el objeto javascript a json antes de agregarlo a los datos de la petici??n
    let datosPeticion = JSON.stringify(datos);

    if (validarEditar(llaveRegistro)) {
        $.ajax({
            // la URL para la petici??n (url: "url al recurso o endpoint")
            url: "http://129.151.118.167:8080/api/Category/update",

            // la informaci??n a enviar
            // (tambi??n es posible utilizar una cadena de datos)
            //si el metodo del servicio recibe datos, es necesario definir el parametro adicional
            data: datosPeticion,

            // especifica el tipo de petici??n http: POST, GET, PUT, DELETE
            type: 'PUT',

            contentType: "application/JSON",

            // el tipo de informaci??n que se espera de respuesta
            //dataType: 'json',

            // c??digo a ejecutar si la petici??n es satisfactoria;
            // la respuesta es pasada como argumento a la funci??n
            success: function (respuesta) {
                //escribe en la consola del desarrollador para efectos de depuraci??n
                console.log(respuesta);
                $("#mensajes").show(1000);
                $("#mensajes").html("Registro actualizado...");
                $("#mensajes").hide(1000);
                location.reload();
              //  listar();
              //  estadoInicial();
            },

            // c??digo a ejecutar si la petici??n falla;
            // son pasados como argumentos a la funci??n
            // el objeto de la petici??n en crudo y c??digo de estatus de la petici??n
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
    $("#Mname"+llaveRegistro).hide();
    let name = $("#Name"+llaveRegistro).val();
    let description = $("#Textarea"+llaveRegistro).val();
    let errores="";
    console.log(llaveRegistro);
    $("#mensajes").html("");
    //valida que los campos no sean vacios
    if( validaesVacio(name)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mname"+llaveRegistro).show(500);
        $("#nameEdit").focus();
        return false;
    }else if( validaesVacio(description)) {
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

