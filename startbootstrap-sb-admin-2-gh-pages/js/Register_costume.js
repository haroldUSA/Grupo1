$(document).ready(function (e) {
    /*var firstname = $('#FirstName').val();
    var secondname = $('#LastName').val();
    var email = $('#InputEmail').val();
    var age = $('#Age').val();*/

    $("#datepicker").datepicker({
        format: "yyyy",
        viewMode: "years", 
        minViewMode: "years",
        viewSelect: 'decade',
        autoclose: true,
    })

    $.getJSON("http://129.151.111.220:8080/api/Category/all", 
    function (data) {
        var client_data="";
        var select_data="";
        var cont=0;
        $.each(data,function(key,value){
         ID=value.ID;   
        client_data+='<a class="dropdown-item" onclick="selectCategory('+value.id+')';
       // client_data+='<td>'+value.id+'</td>';
        client_data+='">'+value.name+'</a><div class="dropdown-divider"></div>';
        select_data=`<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown${value.id}"
        role="button" data-toggle="dropdown" aria-haspopup="true"
        aria-expanded="false">
        ${value.name}
        </a>`;
        $('#barra').append(select_data);
        $('#navbarDropdown'+value.id).hide(5);
        cont=cont+1;
        });
        $('#client').append(client_data);
        $('#IDnumber').hide(500);
        $('#IDCategory').hide(500);
        $("#IDnumber").val(cont);
        //clearfield();
    })

   /* console.log("entro");
    $.getJSON("http://129.151.111.220:8080/api/Category/all", 
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
   // var id = $('#ID').val();
    var brand = $('#Brand').val();
    var description = $('#Textarea1').val();
    var year =$('#datepicker').val();
    var name = $('#Name').val();
    var idcategory = $('#IDCategory').val();
    console.log(brand);
    console.log(description);
    console.log(year);
    console.log(name);
    console.log(idcategory);

    let datos={
       // id: id,
        brand: brand,
        year: year,
        description: description,
        name: name,
        category: {
            id: idcategory 
        }
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
            //location.reload();
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

function selectCategory(llaveRegistro) {
    console.log(llaveRegistro);
    $('#navbarDropdown').hide(5);
    var idNumber = $('#IDnumber').val();
    console.log(idNumber);
    for (let index = 0; index <= idNumber; index++) {
        if(llaveRegistro==index){
            $('#navbarDropdown'+llaveRegistro).show(5);
            $("#IDCategory").val(llaveRegistro);
        }else{
            $('#navbarDropdown'+index).hide(5);
        }
    }
}


function mensaje(){
    alert("Disfraz registrado exitosamente!!")
}

function redireccionar() {
    console.log("entro");
    location.href = "/register_message.html";;
}
