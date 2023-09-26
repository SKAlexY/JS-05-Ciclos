

let dientesTotalesPorAlinear = 0;
let dientesChuecos = 5;
while(dientesChuecos > dientesTotalesPorAlinear){
	//seguir tomando el tratamiento
	console.log("Sigue asistiendo a tus citas");
	//por cada cita que asista, se alinea un diente 
	dientesChuecos--;
}


let limpiezasDisponibles = 5;//O también let limpiezasDisponibles = prompt(“¿Para cuántas limpiezas tienes material hoy?”);
do{
    //hacer limpieza
    limpiezas++;
    if (limpiezas == limpiezasDisponibles){
        console.log("Última limpieza hecha, se acabó lo que se vendía.");
    }
} while (limpiezas < limpiezasDisponibles);
