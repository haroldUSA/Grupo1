$(document).ready(function (e) {
    /*var firstname = $('#FirstName').val();
    var secondname = $('#LastName').val();
    var email = $('#InputEmail').val();
    var age = $('#Age').val();*/

     $('#IDClient').hide();
     $('#IDnumber0').hide();
     $('#IDCostume').hide();
     $('#IDnumber').hide();

    $.getJSON("http://129.151.118.167:8080/api/Reservation/all", 
    function (data) {
        var client_data="";
        $.each(data,function(key,value){
        //$("#IDReservation").val(value.id);    
        client_data+='<tr>';
      //  client_data+='<td>'+value.idReservation+'</td>';
        client_data+='<td>'+value.startDate+'</td>';
        client_data+='<td>'+value.devolutionDate+'</td>';
        client_data+='<td>'+value.status+'</td>';
        client_data+='<td>'+value.costume.name+'</td>';
        client_data+='<td>'+value.client.idClient+'</td>';
        client_data+='<td>'+value.client.name+'</td>';
        client_data+='<td>'+value.client.email+'</td>'
        if(value.score==null){
            client_data+='<td>No Score</td>';
            client_data+=`<td align="center"><button onclick="calificateReservation(${value.idReservation})" style="background-color:#224abe"
        class="rectangular-circle border-6" id="scorebuttom${value.idReservation}"><a
        class="nav-link collapsed" href="#" 
        data-target="#collapsePages"><i
            class="fas fa-star"></i><span
            style="color:white">Score</span></a></button>`
        }else {
            client_data+='<td>'+value.score.stars+'</td>';  
            client_data+=`<td align="center">`         
        }
        client_data+=`
        <button  style="background-color:#224abe"
        class="rectangular-circle border-6" id="Editbuttom${value.idReservation}"><a onclick="actualizar(${value.idReservation})"
                class="nav-link collapsed" href="#" data-toggle="collapse"
                data-target="#collapsePages${value.idReservation}" aria-expanded="true"
                aria-controls="collapsePages${value.idReservation}"><i
                    class="fas fa-fw fa-edit"></i><span
                    style="color:white">Editar</span></a>
            <div id="collapsePages${value.idReservation}" class="collapse"
                aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div class="bg-white  collapse-inner rounded"
                    align="center">
                    <h6 class="collapse-header" style="color:#224abe">Options:
                    </h6>
                    <div class="form-group"><label
                            for="example"></label><input type="text" class="form-control form-control-user" id="datepicker${value.idReservation}" placeholder="startDate" onkeypress="return false;"/>
                            <a id="Mdate1${value.idReservation}" style="color: red;">this field cannot be blank!</a>
                    </div>
                    <div class="form-group"><label
                            for="example"></label><input type="text" class="form-control form-control-user" id="datepicker2${value.idReservation}" placeholder="devolutionDate" onkeypress="return false;"/>
                            <a id="Mdate2${value.idReservation}" style="color: red;">this field cannot be blank!</a>
                    </div>
                        <div class="form-group">
                        <nav class="navbar navbar-expand navbar-light bg-light mb-4">
                            <a class="navbar-brand" href="#">select </a>
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item dropdown" id="barra0${value.idReservation}">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1${value.idReservation}"
                                        role="button" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                        client
                                    </a>
                                    <div id="client0${value.idReservation}"
                                        class="dropdown-menu dropdown-menu-right animated--grow-in"
                                        aria-labelledby="navbarDropdown">
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        <a id="Mclient${value.idReservation}" style="color: red;">this field cannot be blank!</a>
                    </div>    
                    <div class="form-group">
                        <nav class="navbar navbar-expand navbar-light bg-light mb-4">
                            <a class="navbar-brand" href="#">choose</a>
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item dropdown" id="barra${value.idReservation}">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown00${value.idReservation}"
                                            role="button" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            Costume
                                        </a>
                                        <div id="client${value.idReservation}"
                                                class="dropdown-menu dropdown-menu-right animated--grow-in"
                                                aria-labelledby="navbarDropdown">
                                        </div>
                                    </li>
                                </ul>
                        </nav>
                        <a id="Mcostume${value.idReservation}" style="color: red;">this field cannot be blank!</a>    
                    </div>
                    <div class="form-group">
                        <nav class="navbar navbar-expand navbar-light bg-light mb-4">
                            <a class="navbar-brand" href="#">choose</a>
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item dropdown" id="barra${value.idReservation}">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown11${value.idReservation}"
                                            role="button" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            Status
                                        </a>
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown111${value.idReservation}"
                                            role="button" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            Create
                                        </a>
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown112${value.idReservation}"
                                            role="button" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            Canceled
                                        </a>
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown113${value.idReservation}"
                                            role="button" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            Finished
                                        </a>
                                       <div id="client11${value.idReservation}"class="dropdown-menu dropdown-menu-right animated--fade-in"
                                       aria-labelledby="navbarDropdown">
                                       <a class="dropdown-item" onclick="selectStatus(1,${value.idReservation})">Created</a>
                                       <a class="dropdown-item" onclick="selectStatus(2,${value.idReservation})">Canceled</a>
                                       <a class="dropdown-item" onclick="selectStatus(3,${value.idReservation})">Finish</a>
                                        </div>
                                    </li>
                                </ul>
                        </nav>
                        <a id="Mstatus${value.idReservation}" style="color: red;">this field cannot be blank!</a>    
                    </div>
                    <div class="col-sm-6 mb-3 mb-sm-0"><a onclick="editarRegistro(${value.idReservation})"
                            class="btn btn-primary btn-user btn-block ">Update
                            Reservation!</a></div>
                    <div class="collapse-divider"></div>
                </div>
            </div>
        </button>
        <button onclick="deleteReservation(${value.idReservation})" style="background-color:#224abe"
        class="rectangular-circle border-6" id="Deletebuttom${value.idReservation}"><a
        class="nav-link collapsed" href="#" 
        data-target="#collapsePages"><i
            class="fas fa-fw fa-trash-alt"></i><span
            style="color:white">Delete</span></a></button>
    </td>`
        client_data+='</tr>';
        console.log(value.idReservation);
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
    $('#Mdate1'+llaveRegistro).hide();
    $('#Mdate2'+llaveRegistro).hide();
    $('#Mclient'+llaveRegistro).hide();
    $('#Mcostume'+llaveRegistro).hide();
    $('#Mstatus'+llaveRegistro).hide();
    $("#datepicker"+llaveRegistro).datepicker({
        format: "yyyy-mm-dd",
        autoclose: true,
    })
    $("#datepicker2"+llaveRegistro).datepicker({
        format: "yyyy-mm-dd",
        autoclose: true,
    })
    if(est==0){
        $.getJSON("http://129.151.118.167:8080/api/Costume/all", 
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
    
        $.getJSON("http://129.151.118.167:8080/api/Client/all", 
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
        $('#navbarDropdown111'+llaveRegistro).hide();
        $('#navbarDropdown112'+llaveRegistro).hide();
        $('#navbarDropdown113'+llaveRegistro).hide();
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
statu="";
function selectStatus(llaveRegistro,id) {
    console.log(llaveRegistro);
    $('#navbarDropdown11'+id).hide(5);
    for (let index = 1; index <= 3; index++) {
        if(llaveRegistro==index){
            console.log("entro");
            $('#navbarDropdown11'+llaveRegistro+id).show(5);
            if(llaveRegistro==1){
               statu="created";
            }else if(llaveRegistro==2){
               statu="canceled";  
            }else {
               statu="Finished";
            }
           // $("#IDCostume").val(llaveRegistro);
        }else{
            $('#navbarDropdown11'+index+id).hide(5);
        }
    }
}

function calificateReservation(llaveRegistro){
    $('#scorebuttom'+llaveRegistro).hide();
    redireccionar(llaveRegistro);
}

function redireccionar(id) {
    //console.log(id);
    location.href = "/register_score.html?prodId="+id;
}

function deleteReservation(llaveRegistro){
    //crea un objeto javascript
    let datos={
        id: llaveRegistro
    }

    //convierte el objeto javascript a json antes de agregarlo a los datos de la petición
    let datosPeticion = JSON.stringify(datos);

    $.ajax({
        // la URL para la petición (url: "url al recurso o endpoint")
        url: "http://129.151.118.167:8080/api/Reservation",

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
    var date1 = $("#datepicker"+llaveRegistro).val();
    var date2 = $("#datepicker2"+llaveRegistro).val();
    var idcostume = $('#IDCostume').val();
    var idclient = $('#IDClient').val();
    //crea un objeto javascript
    let datos = {
        idReservation: llaveRegistro,
        startDate: date1,
        devolutionDate: date2,
        status:statu,
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
            url: "http://129.151.118.167:8080/api/Reservation/update",

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
    $('#Mdate1'+llaveRegistro).hide();
    $('#Mdate2'+llaveRegistro).hide();
    $('#Mclient'+llaveRegistro).hide();
    $('#Mcostume'+llaveRegistro).hide();
    $('#Mstatus'+llaveRegistro).hide();
    //obtiene valores
    let date1 = $("#datepicker"+llaveRegistro).val();
    let date2 = $("#datepicker2"+llaveRegistro).val();
    let idcostume = $('#IDCostume').val();
    let idclient = $('#IDClient').val();
    let errores="";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if( validaesVacio(date1)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mdate1"+llaveRegistro).show(500);
        $("#nameEdit").focus();
        return false;
    }else if( validaesVacio(date2)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mdate2"+llaveRegistro).show(500);
        $("#nameEdit").focus();
        return false;
    }else if( validaesVacio(idclient)) {
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
    }else if( validaesVacio(statu)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mstatus"+llaveRegistro).show(500);
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

