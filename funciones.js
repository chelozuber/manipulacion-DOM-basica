// Funciones

// Responde las siguientes preguntas en la seccion de comentarios:

// Que es una funcion?: Las funciones nos permiten guardar distintos bloques de codigo para utilizarlos  y ejecutarlos en el futuro.


function nombreCompleto(name, lastName) {
    return name + ' ' + lastName
};

nombreCompleto('Marcelo', 'Zuber');

// Cuando nos sirve usar una funcion en mi codigo: nos sirve cuando tenemos variables con bloques de codigo muy parecidos (con cambios que podrian ser parametros y argumentos) que podemos encapsular para reutilizar mas de una vez en el futuro.
// Tambien nos sirve para ordenar y mejorar la legibilidad de nuestro codigo.

// Cual es la diferencia entre parametros y argumentos de una funcion: las funciones reciben parametros cuando las creamos. Y les enviamos argumentos cuando las ejecutamos.

// Convierte el siguiente codigo en una funcion, pero cambiando cuando sea necesario las variables constantes por parametros y argumentos en una funcion:


const name = 'Marcelo';
const lastName = 'Zuber';
const completeName = name + lastName;
const nickName = 'chelozuber';

console.log('Mi nombre es ' + completeName + ', pero prefiero que me digas ' + nickName + '.');


function saludo(name, lastName, nickName) {
    const completeName = nombreCompleto(name, lastName);
    console.log('Mi nombre es ' + completeName + ', pero prefiero que me digas ' + nickName + '.');
}

saludo('juanita', 'galleog', 'juanitamonitos');