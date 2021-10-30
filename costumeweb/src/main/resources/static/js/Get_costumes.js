$(document).ready(function (e) {
    /*var firstname = $('#FirstName').val();
    var secondname = $('#LastName').val();
    var email = $('#InputEmail').val();
    var age = $('#Age').val();*/
    $('#IDnumber').hide();
    $('#IDCategory').hide();

    $.getJSON("http://129.151.111.220:8080/api/Costume/all",
        function (data) {
            var client_data = "";
            $.each(data, function (key, value) {
                client_data += '<tr>';
                //client_data+='<td>'+value.id+'</td>';
                client_data += '<td>' + value.name + '</td>';
                client_data += '<td>' + value.brand + '</td>';
                client_data += '<td>' + value.year + '</td>';
                client_data += '<td>' + value.description + '</td>';
                client_data += '<td>' + value.category.name + '</td>';
                client_data += `<td align="center"><button  style="background-color:#224abe"
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
                            <a id="Mbrand${value.id}" style="color: red;">this field cannot be blank!</a>
                    </div>                    
                    <a class="collapse-item"
                        >Year
                    </a>
                    <div class="form-group"><label
                            for="example"></label><input type="text" class="form-control form-control-user" id="datepicker${value.id}" placeholder="year" onkeypress="return false;"/>
                            <a id="Mdate${value.id}" style="color: red;">this field cannot be blank!</a>
                    </div>
                    <a class="collapse-item"
                        >Description:
                    </a>
                        <div class="form-group"><label
                                for="example"></label><textarea class="form-control"
                                id="Textarea${value.id}" rows="3" placeholder="Description"></textarea>
                                <a id="Mdescription${value.id}" style="color: red;">this field cannot be blank!</a>
                    </div>
                    <a class="collapse-item"
                        >Name
                    </a>
                    <div class="form-group"><label
                            for="example"></label><input type="text" class="form-control form-control-user" id="Name${value.id}" placeholder="Name">
                            <a id="Mname${value.id}" style="color: red;">this field cannot be blank!</a>
                    </div>
                    <div class="form-group">
                        <nav class="navbar navbar-expand navbar-light bg-light mb-4">
                            <a class="navbar-brand" href="#">choose</a>
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item dropdown" id="barra${value.id}">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1${value.id}"
                                            role="button" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            Category
                                        </a>
                                        <div id="client${value.id}"
                                                class="dropdown-menu dropdown-menu-right animated--grow-in"
                                                aria-labelledby="navbarDropdown">
                                        </div>
                                    </li>
                                </ul>
                        </nav>
                        <a id="Mcategory${value.id}" style="color: red;">this field cannot be blank!</a>    
                    </div>
                    <div class="col-sm-6 mb-3 mb-sm-0"><a onclick="editarRegistro(${value.id})"
                            class="btn btn-primary btn-user btn-block ">Update
                            costume!</a></div>
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
                client_data += '</tr>';
                $("#datepicker" + value.id).datepicker({
                    format: "yyyy",
                    viewMode: "years",
                    minViewMode: "years",
                    viewSelect: 'decade',
                    autoclose: true,
                })
            });
            $('#client').append(client_data);
            $('#idEdit').hide();
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
est = 0;
function actualizar(llaveRegistro) {
    $("#Deletebuttom" + llaveRegistro).toggle();
    $('#Mname' + llaveRegistro).hide(5);
    $('#Mbrand' + llaveRegistro).hide(5);
    $('#Mdate' + llaveRegistro).hide(5);
    $('#Mdescription' + llaveRegistro).hide(5);
    $('#Mcategory' + llaveRegistro).hide(5);
    $("#datepicker" + llaveRegistro).datepicker({
        format: "yyyy",
        viewMode: "years",
        minViewMode: "years",
        viewSelect: 'decade',
        autoclose: true,
    })
    if (est == 0) {
        $.getJSON("http://129.151.111.220:8080/api/Category/all",
            function (data) {
                var client_data = "";
                var select_data = "";
                var cont = 0;
                $.each(data, function (key, value) {
                    ID = value.ID;
                    client_data += '<a class="dropdown-item" onclick="selectCategory(' + value.id + ',' + llaveRegistro + ')';
                    // client_data+='<td>'+value.id+'</td>';
                    client_data += '">' + value.name + '</a><div class="dropdown-divider"></div>';
                    select_data = `<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown${value.id}"
        role="button" data-toggle="dropdown" aria-haspopup="true"
        aria-expanded="false">
        ${value.name}
        </a>`;
                    $('#barra' + llaveRegistro).append(select_data);
                    $('#navbarDropdown' + value.id).hide(5);
                    cont = value.id;
                });
                $('#client' + llaveRegistro).append(client_data);
                $("#IDnumber").val(cont);
                est = 1;
                //clearfield();
            })
    }
}

function selectCategory(llaveRegistro, id) {
    console.log(llaveRegistro);
    console.log(id);
    $('#navbarDropdown1' + id).hide(5);
    var idNumber = $('#IDnumber').val();
    console.log(idNumber);
    for (let index = 0; index <= idNumber; index++) {
        if (llaveRegistro == index) {
            $('#navbarDropdown' + llaveRegistro).show(5);
            $("#IDCategory").val(llaveRegistro);
        } else {
            $('#navbarDropdown' + index).hide(5);
        }
    }
}

function deleteMessage(llaveRegistro) {
    //crea un objeto javascript
    let datos = {
        id: llaveRegistro
    }

    //convierte el objeto javascript a json antes de agregarlo a los datos de la petición
    let datosPeticion = JSON.stringify(datos);

    $.ajax({
        // la URL para la petición (url: "url al recurso o endpoint")
        url: "http://129.151.111.220:8080/api/Costume/"+llaveRegistro,

        // la información a enviar
        // (también es posible utilizar una cadena de datos)
        //si el metodo del servicio recibe datos, es necesario definir el parametro adicional
 //       data: datosPeticion,

        // especifica el tipo de petición http: POST, GET, PUT, DELETE
        type: 'DELETE',

        contentType: "application/JSON",

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
    var brand = $("#Brand" + llaveRegistro).val();
    var year = $("#datepicker" + llaveRegistro).val();
    var description = $("#Textarea" + llaveRegistro).val();
    var name = $("#Name" + llaveRegistro).val();
    var idcategory = $("#IDCategory").val();
    console.log(idcategory);
    let datos = {
        id: llaveRegistro,
        brand: brand,
        year: year,
        description: description,
        name: name,
        category: {
            id: idcategory
        }
    }

    //convierte el objeto javascript a json antes de agregarlo a los datos de la petición
    let datosPeticion = JSON.stringify(datos);

    if (validarEditar(llaveRegistro)) {
        $.ajax({
            // la URL para la petición (url: "url al recurso o endpoint")
            url: "http://129.151.111.220:8080/api/Costume/update",

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

function validarEditar(llaveRegistro) {
    //obtiene valores
    $('#Mname' + llaveRegistro).hide(5);
    $('#Mbrand' + llaveRegistro).hide(5);
    $('#Mdate' + llaveRegistro).hide(5);
    $('#Mdescription' + llaveRegistro).hide(5);
    let id = llaveRegistro;
    let brand = $("#Brand" + llaveRegistro).val();
    let Year = $("#datepicker" + llaveRegistro).val();
    let Description = $("#Textarea" + llaveRegistro).val();
    let name = $("#Name" + llaveRegistro).val();
    let idcategory = $("#IDCategory").val();
    let errores = "";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if (validaesVacio(brand)) {
        errores = "name vacio<br>";
        $("#mensajes").html(errores);
        $("#Mbrand"+llaveRegistro).show(500);
        $("#nameEdit").focus();
        return false;
    } else if (validaesVacio(Year)) {
        errores = "brand vacio<br>";
        $("#mensajes").html(errores);
        $("#Mdate"+llaveRegistro).show(500);
        $("#brandEdit").focus();
        return false;
    } else if (validaesVacio(Description)) {
        errores = "Year vacio<br>";
        $("#mensajes").html(errores);
        $("#Mdescription"+llaveRegistro).show(500);
        $("#YearEdit").focus();
        return false;
    } else if (validaesVacio(name)) {
        errores = "Year vacio<br>";
        $("#mensajes").html(errores);
        $("#Mname"+llaveRegistro).show(500);
        $("#YearEdit").focus();
        return false;
    } else if (validaesVacio(idcategory)) {
        errores = "Year vacio<br>";
        $("#mensajes").html(errores);
        $("#Mcategory"+llaveRegistro).show(500);
        $("#YearEdit").focus();
        return false;
    } else {
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}

function validaesVacio(dato) {
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

