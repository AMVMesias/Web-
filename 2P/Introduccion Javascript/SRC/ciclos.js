//for

const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman', 'Flash'];

console.log('For tradicional');

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);

}


//itera propiedades de un array

console.log('****For in****');


for (let i in heroes) {
    console.log(heroes[i]);
}

//iterar directamente los valores de un array

console.log('****For of****');

for (let heroe of heroes) { 
    console.log(heroe);
}


//Usa for tradicional o clasico, cuando se necesita el control

//Usa for in cuando necesitas iterar propiedades de un objeto

//for of es el mas sencillo de todos, y se usa para iterar valores de un objeto iterable

//continiue, break

for(let contador =0; contador<=10; contador++){
    if(contador%2!==0){
        continue;//va a la siguiente iteracion

    }
    console.log(contador);
}

//while

const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];


let i = 0;

while (i < carros.length) {
    console.log(carros[i]);
    i++;
}

console.warn('usando continue');
while (carros[i]) {
    if (i === 1) {
        i++;
        continue;
    }
    console.log(carros[i]);
    i++;
}