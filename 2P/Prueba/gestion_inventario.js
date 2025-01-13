// Uso de clase Producto para usarlo en la clase inventario
class Producto {
    constructor(nombre, precio, cantidad, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }
}



class Inventario {
    constructor() {
        this.productos = [];
    }
/// aqui la razon del uso de clase producto, es para poder agregar productos al inventario
    agregarProducto(producto) {
        this.productos.push(producto);
    }

    listarProductos(orden) {
        if (orden === 'ascendente') {
            return this.productos.sort((a, b) => a.precio - b.precio);
        } else if (orden === 'descendente') {
            return this.productos.sort((a, b) => b.precio - a.precio);
        }
    }

    filtrarProductos(categoria) {
        return this.productos.filter(producto => producto.categoria === categoria);
    }
    aplicarDescuento(categoria, porcentaje) {
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].categoria === categoria) {
                this.productos[i].precio -= this.productos[i].precio * porcentaje / 100;
            }
        }
    }
}

class Venta {
    constructor() {
        this.ventasRealizadas = [];
    }
//Aumento de parametros en el metodo debito a que se necesita el inventario para poder realizar la venta
    realizarVenta(nombreProducto, cantidad, inventario) {
        let producto = null;
        for (let i = 0; i < inventario.productos.length; i++) {
            if (inventario.productos[i].nombre === nombreProducto) {
                producto = inventario.productos[i];
                break;
            }
        }

        if (!producto) {
            return 'Producto inexistente';
        }
        if (producto.cantidad < cantidad) {
            return 'Cantidad insuficiente';
        }
        producto.cantidad -= cantidad;
        this.registrarVenta(producto, cantidad);
        return 'Venta realizada';
    }

    registrarVenta(producto, cantidad) {
        const fecha = new Date();
        this.ventasRealizadas.push({
            producto,
            cantidad,
            fecha
        });
    }

    generarReporte(inventario) {
        const totalIngresos = this.ventasRealizadas.reduce((total, venta) => total + (venta.producto.precio * venta.cantidad), 0);
        const productoMasVendido = this.ventasRealizadas.reduce((max, venta) => venta.cantidad > max.cantidad ? venta : max, this.ventasRealizadas[0]);

        return {
            inventarioActualizado: inventario.productos,
            ventasRealizadas: this.ventasRealizadas,
            totalIngresos,
            productoMasVendido: productoMasVendido ? productoMasVendido.producto : null
        };

        
    }

    imprimirReporte(inventario) {
        const reporte = this.generarReporte(inventario);
        console.log("Inventario Actualizado:");
        for (let i = 0; i < reporte.inventarioActualizado.length; i++) {
            const producto = reporte.inventarioActualizado[i];
            console.log(`Nombre: ${producto.nombre}, Precio: ${producto.precio}, Cantidad: ${producto.cantidad}, Categoría: ${producto.categoria}`);
        }
        console.log("Ventas Realizadas:");
        for (let i = 0; i < reporte.ventasRealizadas.length; i++) {
            const venta = reporte.ventasRealizadas[i];
            console.log(`Producto: ${venta.producto.nombre}, Cantidad: ${venta.cantidad}, Fecha: ${venta.fecha}`);
        }
        console.log(`Total de Ingresos: ${reporte.totalIngresos}`);
        console.log(`Producto Más Vendido: ${reporte.productoMasVendido ? reporte.productoMasVendido.nombre : 'N/A'}`);
    }

    
}

// Ejemplo de uso


//Para ocupar el programa 

//1.- Se debe crear el objeto inventario, para luego poder agregar productos al inventario, asi que de momento esta vacio
const inventario = new Inventario();
//2.- Se crea el objeto ventas para poder realizar ventas
const ventas = new Venta();


//------------------------------------------------------------------------------------------------------------------------------------------//
//3.- Se crean los productos que se van a agregar al inventario, es de lo mas importante esto para que se pueda seguir con el programa con sus diferentes metodos


// la forma de crear un producto es la siguiente:

// el primer valor es el nombre del producto, el segundo es el precio, el tercero es la cantidad y el cuarto es la categoria
const producto1 = new Producto('Camiseta', 100, 10, 'Ropa');
const producto2 = new Producto('Celular', 200, 5, 'Tecnologia');
const producto3 = new Producto('Pantalon', 150, 10, 'Ropa');
//podemos seguir agregando productos al inventario de esta forma 


//4.- Se agregan los productos al inventario paraa maniupularlos luego en la venta
inventario.agregarProducto(producto1);
inventario.agregarProducto(producto2);
inventario.agregarProducto(producto3)


//5.- Es un paso opcional, pero se puede aplicar un descuento a los productos de una categoria en especifico
// el primer valor es la categoria y el segundo es el porcentaje de descuento
inventario.aplicarDescuento('Ropa', 10);


console.log("----------------------------Productos de forma ascendentes------------------------------------------------------");

const productosOrdenados = inventario.listarProductos('ascendente');
console.log("Productos ordenados:");
for (let i = 0; i < productosOrdenados.length; i++) {
    const producto = productosOrdenados[i];
    console.log(`Nombre: ${producto.nombre}, Precio: ${producto.precio}, Cantidad: ${producto.cantidad}, Categoría: ${producto.categoria}`);
}


console.log("----------------------------Productos de forma descendentes-----------------------------------------------------");

const productosOrdenadosD = inventario.listarProductos('descendente');
console.log("Productos ordenados (descendente):");
for (let i = 0; i < productosOrdenadosD.length; i++) {
    const producto = productosOrdenadosD[i];
    console.log(`Nombre: ${producto.nombre}, Precio: ${producto.precio}, Cantidad: ${producto.cantidad}, Categoría: ${producto.categoria}`);
}
console.log("-----------------------------------------------------------------------------------------------------------------");

//6.- Se realiza una venta de un producto, el primer valor es el nombre del producto, el segundo es la cantidad y el tercero es el inventario
ventas.realizarVenta('Camiseta', 2, inventario)
ventas.realizarVenta('Celular', 1, inventario)
ventas.imprimirReporte(inventario);