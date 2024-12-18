/***************************************************************************** */
/*                                    areglos                                     */


//formas de declarar un arreglo

const array = [1, 2, 3, 4, 5];
const array2 = new Array(1, 2, 3, 4, 5);
const array3 = Array.of(1, 2, 3, 4, 5);

let numeros = [1, 2, 3, 4, 5];
let colores = ['rojo', 'verde', 'azul'];
let vacio = [];
let conjuntq = [1, 'hola', true, null, undefined];
let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];

console.log(videoJuegos);

let arreglosCosas = [
    true,
    123,
    'Fernando',
    1 + 2,
    function () {},
    () => {},
    { a: 1 }
];
console.log(arreglosCosas);
console.log(arreglosCosas[1]);

//map, filter y el reduce

//son metodos funcionales que se puede usar para recorrer y ademas transformar los datos de un arreglo

//map
//Transformar los datos de un arreglo

let numeros2 = [1, 2, 3, 4, 5];
let cuadrados = numeros2.map(num => num * num);  {
    console.log(cuadrados);
}

//filtrar
//filtrar los datos de un arreglo

let numeros3 = [1, 2, 3, 4, 5];
let pares = numeros3.filter(num => num % 2 === 0); {
    console.log(pares);
}


//reduce
//Reduce los datos de un arreglo a un solo valor

let numeros4 = [1, 2, 3, 4, 5];
let maximo = numeros4.reduce((acumulador, num) => num > acumulador ? num : acumulador, 0);
console.log(maximo);


//ventajas 
//Son ideales para trabajar con transformciones y manipulaciones complejas
//permite un estilo de programacion funcional mas limppia y facil de usar