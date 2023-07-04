// Listas

// Arrays: es una lista de elementos.

const array = [1, 'ajjaja', true, false];

// Que es un objeto?: es una lista de elementos PERO cada elemento tiene un nombre clave.

const obj = {
    nombre: 'Marcelo',
    edad: 3,
    comidasFavortia: ['Pollo frito', 'vegetales'],
};

// Cuando es mejor usar objetos o arrays?

// Arrays cuando lo que haremos en un elemento es la mismo que en todos los demas (la regla se puede incumplir). Mientras que un objeto cuando los nombres de cada elemento son importantes para nuestro algoritmo.

// Puedo mezclar arrays con objetos o incluso objetos con arrays? : SI. Los arrays pueden guardar objetos. Y los objetos pueden guardar arrays entre sus propiedades.

// Crea una funcion que pueda recibir cualquier array como parametro e imprima su primer elemento.

function imprimirPrimerElementoArray(arr) {
    console.log(arr[0])
};

imprimirPrimerElementoArray(['Juanuta', 'Rigoberto', 'Eric'])

// Crea una funcion que pueda recibir cualquier array como parametro e imprima su todos sus elementos uno por uno (no se vale imprimir el array completo).

function imprimirElementoPorElemento(arr) {
    for (let i = 0; i <arr.length; i++) {
        console.log(arr[i])
    }
} 

// Crea una funcion que pueda recibir cualquier objeto como parametro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

