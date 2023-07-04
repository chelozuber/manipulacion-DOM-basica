const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(h1);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = 'Patito'; // Cambia el contenido del h1
history.innerHTML = 'Patito <br> Feo'; // Cambia el contenido del h1.
console.log(h1.getAttribute('class')); /* Nos muestra en consola la clase del elemento */
h1.setAttribute('class', 'rojo'); /* Modifica la clase del elemento en la consola */ 

h1.classList.add('rojo'); // Sirve para agregar una clase al elemento
h1.classList.remove('verde'); // Elimina la clase que pongamos del elemento.

input.value = '456'; // Poner un valor por defecto en el value.

const img = document.createElement('img'); // Nos permite crear algo, una img, texto lo que sea.
img.setAttribute('src', 'aca va el link de la img'); // Le coloco un atributo.
console.log(img);

pid.append(img); // Insertamos la img en un elemento de HTML que ya existia.