let inventario = {
    producto1: { nombre: "S21", precio: 100, cantidad: 3 },
    producto2: { nombre: "Moto", precio: 200, cantidad: 5 },
    producto3: { nombre: "Tablet S7", precio: 150, cantidad: 8 },
    producto4: { nombre: "Play 5", precio: 50, cantidad: 20 }
};

Object.seal(inventario);


function venderProducto(nombre, cantidad) {
    for (i in inventario) {
        if (inventario[i].nombre === nombre) {
            if (inventario[i].cantidad >= cantidad) {
                inventario[i].cantidad -= cantidad;
                console.log(`--Si existe suficiente stock, se te vende: ${cantidad} unidades del ${nombre}--`);
                return;
            } else {
                console.log(`Error no existe suficiente stock del ${nombre}`);
                return;
            }
        }
    }
    console.log(`****Error no existe el ${nombre} dentro del inventario ****`);
}

function aplicarDescuento(porcentaje) {
    for (i in inventario) {
        let nuevoPrecio = inventario[i].precio * (1 - porcentaje / 100);
        inventario[i].precio = nuevoPrecio < 0 ? 0 : nuevoPrecio; //valida que si el precio es menor a 0, se quede en 0
    }
}

venderProducto("S21", 1);


//Errores validados con if
venderProducto("Moto", 6); // Esto debería mostrar un error de que no hay estock
venderProducto("Chevrolet",7)  //Error de no encontrar el producto
aplicarDescuento(10); //No se reduce a valores negativos

console.log(inventario);