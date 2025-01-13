// Clase Producto
class Producto {
    constructor(nombre, precio, cantidad, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }
}

// Clase Inventario
class Inventario {
    constructor() {
        this.productos = [];
    }

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
}

// Clase Venta
class Venta {
    constructor() {
        this.ventasRealizadas = [];
    }

    realizarVenta(nombreProducto, cantidad, inventario) {
        const producto = inventario.productos.find(producto => producto.nombre === nombreProducto);
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

    aplicarDescuento(categoria, porcentaje, inventario) {
        const productos = inventario.filtrarProductos(categoria);
        productos.forEach(producto => {
            producto.precio -= producto.precio * porcentaje / 100;
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
}

// Ejemplo de uso
const inventario = new Inventario();
const ventas = new Venta();

const producto1 = new Producto('Producto 1', 100, 10, 'Categoria 1');
const producto2 = new Producto('Producto 2', 200, 5, 'Categoria 2');

inventario.agregarProducto(producto1);
inventario.agregarProducto(producto2);

console.log(inventario.listarProductos('ascendente'));
console.log(ventas.realizarVenta('Producto 1', 2, inventario));
console.log(ventas.generarReporte(inventario));