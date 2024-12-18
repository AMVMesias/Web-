// Arreglo de estudiantes con información inicial
let estudiantes = [
    { nombre: "Ana Martínez", calificaciones: [15, 17, 16] },
    { nombre: "Carlos Rodríguez", calificaciones: [14, 13, 15] },
    { nombre: "María López", calificaciones: [18, 19, 20] },
    { nombre: "Juan Pérez", calificaciones: [10, 11, 9] },
    { nombre: "Laura García", calificaciones: [7, 6, 8] },
    { nombre: "Pedro Sánchez", calificaciones: [12, 13, 14] },
    { nombre: "Sofía Díaz", calificaciones: [16, 17, 18] },
    { nombre: "Miguel Torres", calificaciones: [11, 10, 12] },
    { nombre: "Isabel Ruiz", calificaciones: [9, 8, 10] },
    { nombre: "David Morales", calificaciones: [13, 14, 15] }
];

estudiantes[0].calificaciones = [15, 17, 20];


function calcularPromedio(calificaciones) {
    let sumaCalificaciones = 0;
    for (let calificacion of calificaciones) {
        sumaCalificaciones += calificacion;
    }
    return sumaCalificaciones / 3;
}

function clasificarEstudiante(promedio) {
    if (promedio >= 16) 
        return "Excelente";
    else if (promedio >= 12 && promedio < 16) 
        return "Bueno";
    else if (promedio >= 8 && promedio < 12) 
        return "Aprobado";
    return "Reprobado";
}

function encontrarMaximo(calificaciones) {
    let maximo = calificaciones[0];
    for (let i = 1; i < calificaciones.length; i++) {
        if (calificaciones[i] > maximo) {
            maximo = calificaciones[i];
        }
    }
    return maximo;
}

function encontrarMinimo(calificaciones) {
    let minimo = calificaciones[0];
    for (let i = 1; i < calificaciones.length; i++) {
        if (calificaciones[i] < minimo) {
            minimo = calificaciones[i];
        }
    }
    return minimo;
}
function imprimirResultados() {
    let resultados = estudiantes.map(estudiante => ({
        nombre: estudiante.nombre,
        promedio: calcularPromedio(estudiante.calificaciones)
    }));

    for (let estudiante of estudiantes) {
        let promedio = calcularPromedio(estudiante.calificaciones);
        let clasificacion = clasificarEstudiante(promedio);
        let calificacionMasAlta = encontrarMaximo(estudiante.calificaciones);
        let calificacionMasBaja = encontrarMinimo(estudiante.calificaciones);

        console.log("-----------------------------");
        console.log(estudiante.nombre);
        console.log("Clasificacion: " + clasificacion);
        console.log("Promedio: " + promedio.toFixed(2));
        console.log("Calificacion mas alta: " + calificacionMasAlta);
        console.log("Calificacion mas baja: " + calificacionMasBaja);
        console.log("-----------------------------");


    }

    let mejorEstudiante = resultados.reduce((mejor, actual) => actual.promedio > mejor.promedio ? actual : mejor);

    let peorEstudiante = resultados.reduce((peor, actual) => actual.promedio < peor.promedio ? actual : peor);

    console.log("\nEstudiante con el peor promedio es " + peorEstudiante.nombre + 
                " con un promedio de " + peorEstudiante.promedio);
    console.log("Estudiante con el mejor promedio es " + mejorEstudiante.nombre + 
                " con un promedio de " + mejorEstudiante.promedio);
}

imprimirResultados();