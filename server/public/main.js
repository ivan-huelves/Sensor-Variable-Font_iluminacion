const socket = io()

//Con "on" escucho los valores envaidos por emit
socket.on('envioValorSensorNormalizado', function(valorNormalizado, valorSensor){ //Con on escucho los valores envaidos por emit
  
  //PASO EL VALOR DE ARDUINO A UNA VARIABLE DEFINIDA EN CSS
  let ejevariacion = document.getElementById("valorModificaEjeVariacion"); //creo una variable para asignar a una propiedad en CSS
  let ejevariacion2 = document.getElementById("valorModificaEjeVariacion2");
  
  //FUNCION SIGNIFICATIVA
  ejevariacion.style.setProperty('--tamanoOptico', valorNormalizado);
  //Aunque modifico solo un eje de variación, pongo dos porque un valor lo modifico para el móvil y aplico una constante de transformación
  ejevariacion2.style.setProperty('--tamanoOptico', valorNormalizado*2.2);//--nombre eje variación

  //PARA MOSTRAR LOS VALORES EN EL HTML
  let valor = document.getElementById("muestroValorSensor");
  let valor2 = document.getElementById("muestroValorEjeVariacion");
  let valor3 = document.getElementById("muestroValorEjeVariacion2");

  valor.innerHTML = `${valorSensor}`;
  valor2.innerHTML = `${valorNormalizado}`;
  valor3.innerHTML = `${valorNormalizado*2}`;
})