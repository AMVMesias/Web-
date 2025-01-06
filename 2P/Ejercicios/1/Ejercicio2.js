function calcularPromedio(a, b, c) {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        return 'El parámetro de retorno no es un número, ponga numeros y no texto.';
    }
    return (a + b + c) / 3;
}

let determinarMayor = function(a, b){
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'El parámetro de retorno no es un número, ponga numeros y no texto';
    }
    return (a > b) ? a : b;
}

const esPar = numero => {
    if (typeof numero !== 'number') {
        return 'El parámetro de retorno no es un número por que puso algun texto.';
    }
    return numero % 2 === 0;
};

(function(a, b, c){
    console.log("El promedio es: " + calcularPromedio(a, b, c));
    console.log("El mayor numero entre " + a + " y " + b + " es: " + determinarMayor(a, b));
    console.log("¿Es " + a + " Par " + "? " + esPar(a));
})(3, 4,6);