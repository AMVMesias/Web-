//semtencias de control

//sentencia if
//sentencia switch

let numero =10;
if (numero==1){
    console.log("El numero uno");
}
else if (numero==2){
    console.log("El numero dos");
}
else{
    console.log("EL numero no es 1 ni 2");
}

//Ejercicio estaciones de año

let mes = 5;
let estacion;

if (mes==1 || mes==2){
    estacion = "Invierno";
}
else if (mes==3 || mes==4){
    estacion = "Primavera";
}
else if (mes==5 || mes==6){
    estacion = "Verano";
}
else if (mes==7 || mes==8){
    estacion = "Otoño";
}
console.log(estacion);

//Ejercicio de calculo de hora del dia

/*
6-11, mañana Buenos dias
12-18, tarde Buenas tardes
20-23, noche Buenas noches
24-5, madrugada Durmiendo
/*/

let horadia = 23;
let mensaje;

if (horadia>=6 && horadia<12){
    mensaje = "Buenos dias";
}
else if (horadia>=12 && horadia<19){
    mensaje = "Buenas tardes";
}
else if (horadia>=20 && horadia<=23){
    mensaje = "Buenas noches";
}
else{
    mensaje = "Durmiendo";
}
console.log(mensaje);

//sin uso de llaves 

if(horadia>=6 && horadia<12) console.log("Buenos dias");
else if (horadia>=12 && horadia<19) console.log("Buenas tardes");
else if (horadia>=20 && horadia<=23) console.log("Buenas noches");
else console.log("Durmiendo");


//swich

let mes1 = 12;
let estacion1 = 'Estracion desconocida';

switch(mes1){
    case 1:
    case 2:
        estacion1 = "Invierno";
        break;
    case 3:
    case 4:
        estacion1 = "Primavera";
    case 5:
    case 6:
        estacion1 = "Verano";
        break;
    case 7:
    case 8:
        estacion1 = "Otoño";
        break;
    case 9:
    case 10:
        estacion1 = "Invierno";
        break;
    case 11:
    case 12:
        estacion1 = "Primavera";
        break;
    default:
        estacion1 = "Valor incorrecto";
        break;
}
console.log(estacion1);