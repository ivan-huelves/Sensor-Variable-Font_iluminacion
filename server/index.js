/*Se necesita instalar Node.Js https://nodejs.org/es/
Cargar en la placa Arduino StandardFirmata
Instalar con npm install lo descrito en package.json

Info sensor
http://johnny-five.io/examples/photoresistor/
*/

//INICIO CONFIGURACIÓN
'use strict';
//Johnny-five es una librería para controlar Arduino con Js
const five = require("johnny-five");
//Framework para Node.js
const express = require('express'); //Framework para Node.js
const app = express();
const server = require('http').createServer(app);
//Librería para comunicar cliente y servidor en tiempo real
const io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/public/index.html')
});
// FIN CONFIGURACIÓN

//DECLARACIÓN DE VARIABLES
let sensor;
let valorSensor;
let valorNormalizado;

// control de la Arduino
five.Board().on('ready', function() {
  console.log('Tenemos conexión con Arduino');
 
  //Configuración sensor fotoresistencia en la placa
  sensor = new five.Sensor({
    pin: "A2", //donde está pinchado el sensor
    freq: 250 //frecuencia con la que lee el sensor
  });

  //Registro los valores del sensor en tiempo real
  sensor.on("change", function() {
    
    valorSensor = this.value; //recojo en un variable el valor transformado
    
    //FUNCIÓN NORMALIZADORA
    //el constrain es para limitar los valores máximos y mínimos
    //FUNCION SIGNIFICATIVA TAMBIÉN. NOTESE QUE LOS VALORES ESTÁN AL REVES
    //ATENCIÓN TIENES QUE MODIFICAR LOS MIN Y MAX DEL SENSOR SEGÚN LAS CONDICIONES LUMÍNICAS
    valorNormalizado = five.Fn.constrain(five.Fn.map(valorSensor, 200, 1017, 72, 10),10,72);
    console.log(valorSensor);
    });

})

//COMUNICACIÓN EN TIEMPO REAL ENTRE EL SERVIDOR Y EL CLIENTE
io.on('connection', function(socket){
    //esto es para ver que estamos conectados
    console.log(`cliente: ${socket.id}`)
    //envio el valor cada X segundos al cliente
    setInterval(() => {
      socket.emit('envioValorSensorNormalizado', valorNormalizado, valorSensor) //con emit envío un valor
    }, 100)

})
// FIN COMUNICACIÓN

//En qué puerto
const port = process.env.PORT || 3000;
server.listen(port);
console.log(`Accede en el navegador a http://localhost:${port}`);