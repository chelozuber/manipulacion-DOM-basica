// Condicionales

// Responde las siguientes preguntas:
// Que es un condicional: son las formas en que ejcutamos un bloque de codigo u otro dependiendo de alguna condicion o validacion.

// Tipos de condicionales: IF (else, else if), switch. El condicional if nos permite hacer validaciones completamente distintas (si asi queremos) en cada validacion o condicional. El condicional switch en cambio todos los casos se comparan con las misma variables o condicion que definimos en el switch.

// Puedo combinar funciones y condicionales?: Si, las funciones pueden encapsular cualquier bloque de codigo, incluyendo condicionales.

// Replica el comportamiento del siguiente codigo que usa la sentencia sqitch utilizando if, else, else if:

const tipoDeSuscripcion = 'Basic';

switch (tipoDeSuscripcion) {
    case 'Free':
        console.log('Solo puedes tomar los cursos gratis');
        break;
    case 'Basic':
        console.log('Puedes tomar casi todos los cursos de PLatzi durante un mes');
        break;
    case 'Expert':
        console.log('Puedes tomar casi todos los cursos de PLatzi durante un ano');
        break;
    case 'ExpertDuo':
        console.log('Tu y alguien mas pueden tomar TODOS los curso de Platzi durante un ano');
        break;
}

if (tipoDeSuscripcion == 'Free') {
    console.log('Solo puedes tomar los cursos gratis');
} else if (tipoDeSuscripcion == ' Basic') {
    console.log('Puedes tomar casi todos los cursos');
} else if (tipoDeSuscripcion == 'ExpertDuo') {
    console.log('Tu y alguin mas puede tomar TODOS los cursos de Platzi durante un ano');
}

// el else if signifca sino a diferencia del else que ejecutaria todo lo que esta abajo.
function conseguirTipoDeSuscripcion(suscripcion) {
    if (suscripcion == 'Free') {
        console.log('Solo puedes tomar los cursos gratis');
        return;
    }

    if (suscripcion == 'Basic') {
        console.log('Puedes tomar casi todos los cursos de Platzi durante un mes');
        return;
    }
}
// Comentar como replicar este comportamiento con arrays o objetos y un solo condicional.

const TiposDeSuscripciones = {
    free:'Solo puedes tomar cursos gratis',
    basic:'Puedes tomar casi todos los cursos de Platzi durante un ano',
    expert:'Puedes tomar todos los cursos de Platzi durante un ano',
    expertduo:'Tu y alguien mas pueden tomar TODOS los cursos de Platzi durante un ano',
};

tiposDeSuscripciones.free 

tiposDeSuscripciones['free']

function conseguirTipoDeSuscripcion(suscripcion) {
    if (tiposDeSuscripciones[suscripcion]) {
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }
    console.warn('Este tipo de suscripcion no existe')
}

conseguirTipoDeSuscripcion('free')
