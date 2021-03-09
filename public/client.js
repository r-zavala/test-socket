const socket = io()

// Elementos de la vista (DOM)

let username = document.getElementById('username');
let btn = document.getElementById('send');
let output = document.getElementById('output');

var token = "c22d2cf03e5b458762478400b59c72cc2c4e07817776bf6bbc5050cdcdcdba84";
var settings = {
    "url": "https://api.envia.com/ship/generate/",
    "method": "POST",
    "timeout": 0,
    "headers": {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + token,
    },
    "data": JSON.stringify({
        "origin": {
            "name": "oscar mx",
            "company": "oskys factory",
            "email": "osgosf8@gmail.com",
            "phone": "8116300800",
            "street": "av vasconcelos",
            "number": "1400",
            "district": "mirasierra",
            "city": "Monterrey",
            "state": "NL",
            "country": "MX",
            "postalCode": "66236",
            "reference": ""
        },
        "destination": {
            "name": "oscar",
            "company": "empresa",
            "email": "osgosf8@gmail.com",
            "phone": "8116300800",
            "street": "av vasconcelos",
            "number": "1400",
            "district": "palo blanco",
            "city": "monterrey",
            "state": "NL",
            "country": "MX",
            "postalCode": "66240",
            "reference": ""
        },
        "packages": [{
            "content": "camisetas rojas",
            "amount": 2,
            "type": "box",
            "dimensions": {
                "length": 2,
                "width": 5,
                "height": 5
            },
            "weight": 63,
            "insurance": 0,
            "declaredValue": 400,
            "weightUnit": "KG",
            "lengthUnit": "CM"
        }, {
            "content": "camisetas rojas",
            "amount": 2,
            "type": "box",
            "dimensions": {
                "length": 1,
                "width": 17,
                "height": 2
            },
            "weight": 5,
            "insurance": 400,
            "declaredValue": 400,
            "weightUnit": "KG",
            "lengthUnit": "CM"
        }],
        "shipment": {
            "carrier": "fedex",
            "service": "express",
            "type": 1
        },
        "settings": {
            "printFormat": "PDF",
            "printSize": "STOCK_4X6",
            "comments": "comentarios de el envío"
        }
    }),
};

btn.addEventListener('click', function () {

    $.ajax(settings).done(function (response) {
        console.log(response);
    });

    socket.emit('api', {
        username: username.value,
    })
});

// Imprimiendo el valor de contador en la vista
socket.on('server-count', function (data) {
    output.innerHTML = `<p><strong>${data}</strong></p>`
})