$(document).ready(function (e) {
    /*var firstname = $('#FirstName').val();
    var secondname = $('#LastName').val();
    var email = $('#InputEmail').val();
    var age = $('#Age').val();*/



    $.getJSON("https://g3abde25bedbc30-db202109241616.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client", 
    function (data) {
        var client_data="";
        $.each(data["items"],function(key,value){
        client_data+='<tr>';
        client_data+='<td>'+value.id+'</td>';
        client_data+='<td>'+value.name+'</td>';
        client_data+='<td>'+value.email+'</td>';
        client_data+='<td>'+value.age+'</td>';
        client_data+='<td align="center">'+'<button style="background-color:#224abe" class="rectangular-circle border-6" id="sidebarToggle"><a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"aria-expanded="true" aria-controls="collapsePages"><i class="fas fa-fw fa-table"></i><span style="color:white">Editar</span></a><div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar"><div class="bg-white py-2 collapse-inner rounded" align="center"><h6 class="collapse-header" style="color:#224abe" >Options:</h6><a class="collapse-item" href="table_clientes.html">name</a><div class="col-sm-6 mb-3 mb-sm-0"><input type="text" class="form-control form-control-user" id="Name'+value.id+'" placeholder="Name"></div><a class="collapse-item" href="table_disfraz.html">   Delete</a><div class="col-sm-6 mb-3 mb-sm-0"><input type="text" class="form-control form-control-user" id="Email'+value.id+'" placeholder="Email"></div><div class="col-sm-6 mb-3 mb-sm-0"><a id="submitbtn'+value.id+'" class="btn btn-primary btn-user btn-block">Update client!</a></div><div class="collapse-divider"></div></div></div></li>'+'</button>';
        client_data+='</tr>';
        });
        $('#client').append(client_data);
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