// Ciclos: son la forma de ejecutar un bloque de codigo hasta que se cumple ciera condicion.

// Tipos de ciclos: while, do while y for.

// Que es un ciclo infinito y porque es un problema?: es cuando la viladicion de nuestro condicionales nunca se cumple y termina danando la aplicacion (ej: cuando el navegador ya no puede mas de tanta ejecucion de ese bloque de codigo).

// Puedo mezclar ciclos y condicionales?: Si, aunque los ciclos son una especie de condicionales, nada nos impide agregar mas condicionales dentro del cuclo.

// Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
    console.log('El valor de i es: ' + i);
}

// Con while

let i = 0;

while (i < 5) {
    console.log('El valor de i es: ' + i);
    i++;
}

for (let i = 10; i >=2; i--) {
    console.log('El valor de i es: ' + i);
}

let i = 10;

while (i >= 2) {
    console.log('El valor de i es: ' + i);
    i--;
}

// Escribe un codigo en JavaScript que le pregunte a los usuarios cuanto es 2 + 2 . Si responden bien, mostramo un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

let respuesta;

while (respuesta != 4) {
    let pregunta = prompt('Cuanto es 2 + 2')
    let respuesta = pregunta;
}