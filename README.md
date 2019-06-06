# Sensor Varaible Font

El proyecto da un uso semántico a las tipografías variables en interfaces gráficas, estableciendo una relación entre la propia tipografía y los datos recogidos por diferentes sensores.

Providing variable fonts with a semantic use in graphic interfaces to establish a relationship between typography and the data collected by different sensors.

## Prototipo Nº2. Sensor de iluminación aplicado al tamaño óptico de la tipografía en dispositivos con pantalla

![Sensor Variable Font - distancia](/img/sensorvariablefont-iluminacion.jpg)

En el segundo prototipo se relaciona el grado de iluminación de un espacio con la percepción óptica de la tipografía en dispositivos con pantalla como libros electrónicos o smartphones.
Por un lado los elementos serían el sensor de iluminación, con un valor mínimo de 200 y un valor máximo de 1017. Hay que tener en cuenta que estos valores son relativos a la condición lumínica del espacio por lo que solo se han de tomar como referencia. Resulta preciso calibrar el sensor antes. El valor registrado se actualiza cada 100 milisegundos. El sensor empleado se trata de una fotorresistencia o LDR (light depending sensor) que calcula el valor oponiendo más o menos resistencia al paso de corriente según las condiciones lumínicas.
Y por otro la tipografía variable Amstelvar Alpha y el eje de variación Tamaño óptico, con un valor mínimo de 10 y un valor máximo de 72.
En este caso el segundo paso ha sido ejecutar la Función significativa sobre el prototipo gracias a la reflexión anterior. El objetivo en este caso es mejorar la percepción del texto en un dispositivo con pantalla. A través del eje de variación Tamaño óptico podemos aumentar el tono de la tipografía sin aumentar el ancho o alto que ocupa en el espacio compositivo. Esto es muy importante en ya que no queremos que el flujo de texto varíe por intentar mejorar la percepción y provoque que el lector pierda la referencia de donde se encontraba leyendo. El primer proceso significativo sería el de agudeza ya que se trata de cambios sutiles. Y en segundo lugar sería el de yuxtaposición ya que necesitamos que cuanto menor sea el valor de iluminación, mayor sea el tono de la tipografía para mejorar su lectura. Por último se ha incluido la función de proporcionalidad ya que dependiendo del tamaño de la pantalla del dispositivo varía. En unos casos la relación entre iluminación y tono será correlativa, como en un lector electrónico, y en otros como en una pantalla smartphone de menor tamaño será exponencial.
Una vez que se ha establecido la intención significativa se prosigue con la Función normalizadora que establece la relación entre el valor mínimo del sensor con el valor máximo del eje de variación, y el valor máximo del sensor con el valor mínimo del eje.
Finalmente una vez que el valor normalizado se ha transformado a partir del proceso de significación se decide aplicar a todos los glifos.
