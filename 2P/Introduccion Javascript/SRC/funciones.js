/**
 * FUNCIONES EN JAVASCRIPT
 */

//Declare functions

function miFunction(a,b){
    console.log("La suma es:"+(a+b));
}

console.log("Llamado a la funcion miFunction");
miFunction(4,9);

//return function

function retornaValue(a,b){
    return a+b;
}

let result = retornaValue(2,9);
console.log(result);
console.log("Llamado de la funcion retornaValue:"+retornaValue(9.6,7));

// Funciones tipo expresion
let sumar=function(a,b){
    return a+b;
}

resultado=sumar(5,1);
console.log("Usando como una expresion:"+resultado);

//Funciones del tipo self-invoking
//son funciones que se llaman a así misma 
//funciones anonimas
//Nota: se puede usar cuando se carga programas

(function(a,b){
    console.log("Ejecucion "+(a+b));
    })(3,4);

    /**
     * Una función autoejecutable (self-invoking function) es una función que se ejecuta 
     * automáticamente tan pronto como se define, sin necesidad de ser llamada explícitamente.
     * Se crea envolviendo la función en paréntesis y luego añadiendo () al final para invocarla.
     */

    (function() {
        console.log("Esta función se ejecuta automáticamente!");
    })();
    
    (function(nombre) {
        console.log("Hola, " + nombre);
    })("Denise Rea");
    
    function total(x,y,z){
        console.log(arguments.length);
        return x+y+z;
    }

    total(2,6,8);

    /**
     * Funcione tipo flecha (arrow function)
     */

    const multiplicar= (x,y)=>x*y;
    console.log(multiplicar(3,5));

    const saludar = () => console.log("Esto es textooooo");
    saludar();

    const cuadrado=x=>x*x;
    console.log(cuadrado(4));

    //Operaciones

    const Operaciones={sumar:(a,b)=>a+b};
    console.log(Operaciones.sumar?.(1,2));

    //puedo definir mas operaciones
    const operaciones={sumar:(a,b)=>a+b,restar:(a,b)=>a-b};
    console.log(operaciones.restar(5,3));

    /**
     * Funcion anonima
     * usada como argumento para otras funciones
     */

    setTimeout(function(){
        console.log("Funcion anonima");
    },1000);