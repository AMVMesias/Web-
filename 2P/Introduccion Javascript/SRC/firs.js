var nombre;
var edad;
var altura;

nombre = "Juan";
edad = 25;
altura = 1.75;

console.log("Nombre: " + nombre);
console.log("Edad: " + edad);
console.log("Altura: " + altura);

//tipos de datos en javaspript//

//var para declarar variable global
// let para declarar variable local o tambien una vaiable tipo bloque
// const para declarar una variable que no cambia
//if marca un bloque de instrucciones que se ejecutan si se cumple la condicion
//switch marca un bloque de instrucciones que se ejecutan si se cumple la condicion
//for marca un bloque de instrucciones que se ejecutan varias veces
//while marca un bloque de instrucciones que se ejecutan varias veces
//function marca un bloque de instrucciones que se ejecutan cuando se llaman
//try se ejecuta cuando no se produce un error
//catch se ejecuta cuando se produce un error
//return se ejecuta cuando se cumple una condicion y se devuelve un valor

//tipos de datos en javaspript//
//tipo de dato string

var nombre = "Juan";
console.log(nombre);

var edad = 25;
console.log(edad);

//Tipo de dato object

var objecto = {
    nombre: "Juan",
    edad: 25,
    altura: 1.75
}
console.log(objecto);

//tipo de dato Typrof

var var1 = "Juan";
var var2 = false;
var var3 = BigInt(123)
var var4 = Array(1,2,3,4,5);
console.log(var1);
console.log(typeof var1);
console.log(var2);
console.log(typeof var2);
console.log(var3);
console.log(typeof var3);
console.log(var4);
console.log(typeof var4);

//tipo de dato boolean

var bandera = true;
console.log(bandera); 
console.log(typeof bandera);

function saludar(){
    console.log("Hola");
}
console.log(saludar);
console.log(typeof saludar);

//tipo de dato symbol
var symbol = Symbol("mi simbolo");
console.log(symbol);
console.log(typeof symbol);

//Tipo de clase function

class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

console.log(Persona);
console.log(typeof Persona);

var variable;
console.log(variable);
console.log(typeof variable);

var x;
console.log(x);
console.log(typeof x);

//Tipo de dato null
var vaiable = null;
console.log(vaiable);
console.log(typeof vaiable);

//Tipo de dato arreglo

var autos = ["BMW", "Audi", "Volvo"];
console.log(autos);
console.log(typeof autos);

//Tipo de dato con cadena vacia
var cadena = "";
console.log(cadena);
console.log(typeof cadena);

//reglas en javascript

let nombreCompleta;
let nombrecompleta;


//forma correcta de declarar una variable
var a1nombreCompleto;

var _nombreCompleto;
var $nombreCompleto;

//forma incorrecta de declarar una variable

//var %nombreCompleto;
//var 1nombreCompleto;
//var nombre completo;
//var #nombreCompleto;


//operadores en javascript

//varperadores aritmeticos
let a = 5;
let b = 2;
let c = a + b;
console.log("Suma: " + c);

let d = a - b;
console.log("Resta: " + d);

let e = a * b;
console.log("Multiplicacion: " + e);

let f = a / b;
console.log("Division: " + f);

let g = a % b;
console.log("Modulo: " + g);

let h = a ** b;
console.log("Exponenciacion: " + h);

let i = 10;
let j = ++i;
console.log("Incremento: " + j);

let k = 10;
let l = --k;
console.log("Decremento: " + l);

    //variables de igualdad
    var m = 5;
    var n = 5;
    var o = m == n;
    var p = m != n;
    var q = m > n;
    var r = m < n;
    var s = m >= n;
    var t = m <= n;
    console.log("Igualdad: " + o);
    console.log("Desigualdad: " + p);
    console.log("Mayor que: " + q);
    console.log("Menor que: " + r);
    console.log("Mayor o igual que: " + s);
    console.log("Menor o igual que: " + t);


    let comparacion1 = 10;
    let comparacion2 = "10";

    let comparacion3 = comparacion1 == comparacion2;
    console.log(comparacion3);

    let comparacion4 = comparacion1 === comparacion2;
    console.log(comparacion4);



    //precesendia de operadores

    let a1 = 3, b1 = 2, c1 = 1, d1 = 4;
    let resultado = a1 + b1 * c1 / d1;
    console.log(resultado);

    let resultado1 = (a1 + b1) * c1 / d1;
    console.log(resultado1);

    let a2 = 6, b2 =7 , c2 = 8, d2 = 9;
    let dato3 = a2 * b2 + c2/d2
    console.log(dato3);

    //division y asignacion

    let am = 5;
    let a10= 10;
    am+=3;
    console.log(am);
    am-=2;
    console.log(am);

    a10-=2;pop
    console.log(a10);

    //Operadores logicos

    //determinar si un numero es par o impar

    let numero = 10;
    if(numero % 2 == 0){
        console.log("Numero par");
    }else{
        console.log("Numero impar");
    }

    //Determinar si una persona es mayor de edad o no 

    let edad1 = 19;
    if(edad1 >= 18){
        console.log("Es mayor de edad");
    }else{
        console.log("Es menor de edad");
    }


    //operadores AND y OR

    let v = 12;

    let valMin = 0; valorMax = 10;

    if (v >= valMin && v <= valorMax){
        console.log("Dentro de rango");
    }else{
        console.log("Fuera de rango");
    }

    //operador OR

    if(v < valMin || v > valorMax){
        console.log("Fuera de rango");
    }else{
        console.log("Dentro de rango");
    }

    //operadores or ==>

    if(v >= valMin || v <= valorMax){
        console.log("Fuera de rango");  
    }else{
        console.log("Dentro de rango");
    }

    //operadores ternarios

    let resultado4 = (s >= valMin && s <= valorMax) ? "Dentro de rango" : "Fuera de rango";

    //conversion

    let minumero = "10";
    console.log(typeof minumero);

    let edad2 = parseInt(minumero);
    let edad3 = Number(minumero);

    console.log(edad2);
    console.log(edad3);

    if (edad2 >= 18){
        console.log("Puede votar");
    }
    else{
        console.log("No puede votar");
    }

    //parsInt convierte un string a un numero entero
    //Number convierte un string a un numero

console.log(parseInt("42px"));
console.log(parseInt(3.1416));
console.log(parseInt("abc"));


console.log(Number("42px")); //No se puede convertir toda la cadena

console.log(Number(3.1416));

console.log(Number("abc"));//No se puede convertir toda la cadena

console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));