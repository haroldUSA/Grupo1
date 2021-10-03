$('#submitbtn').click(function (e) {
    e.preventDefault()
    var id = $('#ID').val();
    var brand = $('#Brand').val();
    var model = $('#Model').val();
    var category_id = $('#Category_id').val();
    var name = $('#Name').val();
    console.log(brand);
    console.log(model);
    console.log(category_id);
    console.log(name);

    $.post("https://g3abde25bedbc30-db202109241616.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/costume/costume", {
        id: id,
        brand: brand,
        model: model,
        category_id: category_id,
        name: name
    }, function (response) {
        console.log('success====:', response)
        clearfield();
        mensaje();
        //setTimeout("redireccionar()", 3000);
    })

    function clearfield(){
      $("#ID").val("");
      $("#Brand").val("");
      $("#Model").val("");
      $("#Category_id").val("");
      $("#Name").val("");
    }
});


function mensaje(){
    alert("Disfraz registrado exitosamente!!")
}

function redireccionar() {
    console.log("entro");
    location.href = "/register_message.html";;
}