// Objetivos //
/**
 * Definir y usar matrices
 * Accedeer a elementos de una matriz en una posicion determinada
 * Agregar un nueo elemento a una matriz
 * Eliminar un elemento de una matriz
 * Usar los diferentes bucles de JS (While y For)
 * Explicar las principales diferencias entre While y For
 */

//ESTRUCTURAS DE CONTROL

/*
Condiciones: alterar el orden natural del codigo
Estructura de control: controlar la estructura del codigo 

Ciclos o bucle (loops)

Tambien conocidos como bucles, son estructuras de contorl que nos van a permitir ejecutar un bloque de codigo de forma repetida, hasta que se cumpla una condicion especifica.

Es importante usar ciclos para automatizar tareas repetitivas 

En JS existen los siguiente ciclos:

   -while
   -doo while
   -for


Iterar: proceso de repetir una secuencia de instrucciones
Estructura de contorl: herramiento especial para crear algoritmos o programas mas dinamigo y flexibles.

*/

// Funciones : reducir codigo

//While: Ejecuta un bloque de codigo mientras se cumpla una condicion especifica. Este cliclo se repite mientras la condicion sea verdadera, y el bloque de codigo se ejecuta siempre y cuando la condicion se mantenga. la condicion se evalua antes de cada iteracion.

/*
while (condicion){
    //codigo que se ejecuta
}

*/

        //condicion//  => mientras esto sea verdad esta bien
/*while (miCrushMeQuiere){
    console.log("sere feliz");
} //si es falso todo se detiene 
*/

//NOTA esto significa peligro
//while(true){}

/*
Analogia: Seguir una receta para preparar una sopa 

Lista de ingredientes:
   -Zanahoria
   -Papas
   -Chayote
   -Limon
   -Agua
   -Espinaca 

Vamos a agregar los ingredientes a la olla mientras tengamos ingredientes disponibles.

Paramos cuando ya no tengamos ingredientes.
 */

//Ejemplo de un consultorio dental 

let capacidadPacientes = 50;
let pacientesEnConsultorio = 15;
//mientras 15 sea menos que 50...
while (pacientesEnConsultorio < capacidadPacientes){ //15<50 = true
    //seguire dando servicio
    console.log("Seguimos dando servicio"); //imprimir
    //aumenta en uno mis pacientes
    pacientesEnConsultorio++; //15+1 y se regresa por lo que seria 16+1 y asi hasta que llegue a 51 y de falso 
}
//punto inicio, codigo a ejecutar, punto de final

//Mientras sea verdadero, se ejecuta la instruccion (piden permiso para ir a una fiesta)



/* Do while (hacer mientras)
//Se ejecuta la instruccion, mientras sea verdadero (pedir perdon por ir a la fiesta)


//El bucle do while se diferencia del while ya que aqui se ejecuta la instruccion al menos una vez, y luego se preguta para saber si se sigue ejecutando o no.


do {
    //codigo a ejecutar
} while (condition);

Analogia: cuando preparamos un pastel 

 */

//Ejemplo de un consultorio dental

/*var contadorPacientes = 0;

do {
    var nombre = prompt ("Ingresa el nombre del paciente");
    if (nombre) {
        contadorPacientes ++;
    }
} while (confirm("Desea registrar otro paciente?"));

console.log("Numero total de pacientes: " , contadorPacientes); */


/*
For (para)

Se utiliza cuando conocemos el numero exacto de iteraciones que vamos a realizar.
Consiste de 3 partes fundamentales:

   - inicializacion: se ejecuta antes de que el bucle comience y se usa para establecer una variable de control (variable de inicio)
   - condicion: es el detonante que verificamos antes de cada iteracion, para saber si se sigue ejecutando o no (siempre y cuadno sea verdadera)
   - expresion de iteracion (contador): tiene la finalidad de modificar la variable de inicio y poder tener un punto de cierre.


   for(inicializacion; condicion; expresion de iteracion) {
    //loque de codigo a ejecutar
   }


*/

//Crea un codigo que imprima los numero del 0 al 4 

for (var valorInicial = 0; valorInicial<5; valorInicial++){
    console.log(valorInicial);
}

//Version mas "comercial"
for(var i = 0; i<5 ; i++){
    console.log(i);
}


// Consultorio dental registro de citas con for

let cantidadDeCitasDiarias = 5;

for (let i=1; i<= cantidadDeCitasDiarias; i++){
    var nombre = prompt ("Ingrese el nombre del paciente "+ i);
    console.log(nombre + " Paciente con cita " + i);
}


