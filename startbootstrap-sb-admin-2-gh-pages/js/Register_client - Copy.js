var form = document.getElementById('form')
form.addEventListener('submit', function (e) {
    console.log("entro")
    e.preventDefault()

    var fistname = document.getElementById('FirstName').value
    var secondname = document.getElementById('LastName').value
    var emaild = document.getElementById('InputEmail').value
    var aged = document.getElementById('Age').value

    fetch('https://g3abde25bedbc30-db202109241616.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client', {
       /* origin:"*",
        credentials: 'include',
        mode: "no-cors",*/
        method: "POST",
        body: JSON.stringify({
            id: 1,
            name: secondname + " " + fistname,
            email: emaild,
            age: aged
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(result => console.log('success====:', result))
    .catch(error => console.log('error============:', error));
})