


//caracteristicas

// claves y valores

//Las Claves son cadenas o simbilos (unicos)


//los vakires pueden ser de cualquier tipo: numeros, cdenas, funciones, otros objetos, arreglos, etc.

//Dinamismo

//Los objetos pueden modificarse en tiempo de ejecucuib (agreggar, modificar, eliminar propiedades)

//Metodos
//los metodos son funciones que se asocian a un objeto

//Propiedades y metodos

//Declaracion objeto

let persona = { 
    nombre: "Denise",
    apellido: "Rea",
    email: "readenise@gmail.com",
    edad: 23
}

console.log(persona);


let persona2 = {
    nombre: "Juan",
    apellido: "Perez",
    direccion: "QUITO",
    email: "perezjuan@gmail.com",
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona2.nombreCompleto());


const personav = {
    nombre: "Denise",
    apellido: "Rea",
    saludar: function(){
        console.log(`Hola, como estas? ${this.nombre}`);
    }

}


console.log(personav.nombre);
personav.saludar();


//Crear un constructor Object
//otra forma de rear un objetovacio y agreagarle propiedades posteriormente

const persona3 = new Object();
persona3.nombre = "Mesias";
persona3.apellido = "Mariscal";
persona3.saludar = function(){
    console.log(`Hola, como estas? ${this.nombre}`);
}

console.log(persona3.nombre);
persona3.saludar();




//usando la clase object.create()
//permite crear un objeto a partir de otro prototipo


const prototipoPersonas = {
    saludar: function(){
        console.log(`Hola, desde prptotipo, soy ${this.nombre}`);
    }
}


const persona4 = Object.create(prototipoPersonas);
persona4.nombre = "Mesias"
//uso de prototipo
persona4.saludar();



//Usando clases
//proporciona una sintaxis mas estructurada para la creacion de objetos JS


class Persona{
    constructor(nombre, apellido, edad, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.telefono = telefono;
    }

    saludar(){
        console.log(`Hola, desde clases me llamo ${this.nombre}`);
    }
}


const persona5 = new Persona("Mesias", "Mariscal", 21, "0987654321");
persona5.saludar();


//usando funciones constructoras
//una forma clasica

function Personan(nombre, edad, email){

    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
    this.saludar = function(){
        console.log(`Hola, desde funciones con parametros ${this.nombre}`);
    }
}

const persona6 = new Personan("Denise", 23, "eldiablo@gmailcom");   

//Manipular objetos

//1. Agregar O modificar propiedades

const add = {nombre: "Mesias"}
add.edad = 35;
add.apellido = "Mariscal";
add.ci = "1234567890";

add.nombre = "Andres";

console.log(add);


//2. eliminar propiedades

//delete add.edad;

console.log(add);



//3. Recorrer un objeto

for (i in add) {
    console.log(i);
    console.log(add[i]);
}


for (i in add) {
    console.log(`${i}: ${add[i]}`);
}


//4. Verificar si un objeto tiene una propiedad
console.log('nombre' in add);

console.log(add.hasOwnProperty('nombre'));

//Metodos utiles para trabajar con objetos
//1. object.keys(objeto)
//devuelve un arreglo con las propiedades del objeto

console.log(Object.keys(add));

//2. object.values(objeto)
//devuelve un arreglo con los valores de las propiedades del objeto

console.log(Object.values(add));

//3. object.entries(objeto)
//devuelve un arreglo con los valores de las propiedades del objeto

console.log(Object.entries(add));

//4. object.assign(objeto1, objeto2)
//permite copiar las propiedades de un objeto a otro

const copiaObjeto = Object.assign({}, add);
console.log(copiaObjeto);

//5. object.freeze(objeto)
//permite congelar un objeto, es decir, no se puede modificar, agregar o eliminar propiedades

Object.freeze(add);
add.nombre = "Denise";
console.log(add);


//6. object.seal(objeto)
//permite sellar un objeto, es decir, no se puede agregar o eliminar propiedades, pero si se pueden modificar

Object.seal(add);
add.nombre = "Denise";
add.direccion = "Quito";
console.log(add);


//Nota adicional

let personaArray = Object.values(persona);
console.log(personaArray);

let personaString = JSON.stringify(persona);
console.log(personaString);

console.log(JSON.parse(personaString));

//ver Objetvo Grpupby

//Metodos get y set


//Mejores practicas para acceder y modificar propiedades de un objeto


let personaget = {
    nombre: "Mesias",
    apellido: "Mariscal",
    edad: 21,
    get nombreCompleto() {
        return this.nombre + " " + this.apellido;
    }
} 
console.log(personaget.nombreCompleto);



//Metodo set en objetos de JS
//Establecer un valor a los atributos de un objeto

//validacion 

let personaset = {
    nombre: "Mesias",
    apellido: "Mariscal",
    email: "mesi@gmail.com",
    edad: 21,
    idioma: "ES",
    get lang() {
        return this.idioma.toUpperCase();
    },

    get nombreCompleto() {
        return this.nombre + " " + this.apellido;
    }
}

console.log(personaset.lang)


let personaset2 = {
    nombre: "Mesias",
    apellido: "Mariscal",
    email: "mesi@gmail.com",
    edad: 21,
    idioma: "ES",
    get lang() {
        return this.idioma.toUpperCase();
    },

    get nombreCompleto() {
        return this.nombre + " " + this.apellido;
    },
    
    set lang(lang){
        this.idioma = lang.toUpperCase();
    }	
}


console.log(personaset2.lang);  
personaset2.lang = "en";
console.log(personaset2.lang);


//Si deseo crear mas objetos del mismo tipo no es posible

//Para eso se usa una funcion constructora

//Funcion constructora

function PersonaFC(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
 
}

let padre = new PersonaFC("Juan", "Perez", "mesias@gmail.com"); 
console.log(padre);

padre.telefono = "0987654321";

console.log(padre);
padre.nombre = "Carlos";
console.log(padre);
let madre = new PersonaFC("Maria", "Rea", "rea@gmail.com");
console.log(madre);


function PersonaFCM(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}

let padre2 = new PersonaFCM("Juan", "Perez", "eldiablo@gmail.com");
console.log(padre2.nombreCompleto());

let madre2 = new PersonaFCM("Maria", "Rea", "diaz@gmail.com");
console.log(madre2.nombreCompleto());


//uso de prototype

PersonaFCM.prototype.tel = "0987654321";

console.log(padre2.tel);


let personaC1 = {
    nombre: "Mesias",
    apellido: "Mariscal",
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

let personaC2 = {
    nombre: "Mesias",
    apellido: "Mariscal",

}


//Para usar el metodo nombreCompleto de personaC1 en personaC2
console.log(personaC1.nombreCompleto());

console.log(personaC1.nombreCompleto.call(personaC2));
//console.log(personaC1.nombreCompleto.apply(personaC2));


//pasar argumentos a parametros con call

let personaCP1 = {
    nombre: "Mesias",
    apellido: "Mariscal",
    nombreCompleto: function(titulo, tel){
        return titulo + ": " + this.nombre + " " + this.apellido + ", " + tel;
    }
}


let personaCP2 = {
    nombre: "Andres",
    apellido: "farsa",

}


console.log(personaCP1.nombreCompleto("Lic", "0987654321"));
console.log(personaCP1.nombreCompleto.call(personaCP2, "Ing", "0987654321"));