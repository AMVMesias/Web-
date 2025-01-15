class Producto {
    constructor(idProducto, nombre, precio, categoria, stock) {
        this._idProducto = idProducto;
        this._nombre = nombre;
        this._precio = precio >= 0 ? precio : 0; // Asegurar que el precio no sea negativo
        this._categoria = categoria;
        this._stock = stock;
    }

    get precio() {
        return this._precio;
    }

    set precio(nuevoPrecio) {
        if (nuevoPrecio >= 0) {
            this._precio = nuevoPrecio;
        }
    }

    get stock() {
        return this._stock;
    }

    disminuirStock(cantidad) {
        if (this._stock >= cantidad) {
            this._stock -= cantidad;
        } else {
            console.log('Stock insuficiente');
        }
    }
}

class Orden {
    static contadorOrdenes = 0;
    static descuentosPorCategoria = {};

    static get MaxProductos() {
        return 5;
    }

    static setDescuento(categoria, porcentaje) {
        Orden.descuentosPorCategoria[categoria] = porcentaje;
    }

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    agregarProducto(producto) {
        if (this._productos.length < Orden.MaxProductos) {
            if (producto.stock > 0) {
                this._productos.push(producto);
                producto.disminuirStock(1);
            } else {
                console.log('Producto sin stock');
            }
        } else {
            console.log('No se pueden agregar más productos a la orden');
        }
    }

    calcularTotal() {
        let total = 0;
        for (let producto of this._productos) {
            let precioProducto = producto.precio;
            if (Orden.descuentosPorCategoria[producto._categoria]) {
                precioProducto *= (1 - Orden.descuentosPorCategoria[producto._categoria]); // Aplicar descuento
            }
            total += precioProducto;
        }
        return total;
    }

    calcularImpuesto() {
        return this.calcularTotal() * 0.15;
    }

    mostrarOrden() {
        console.log(`----------Orden: ${this._idOrden}----------`);
        console.log(`Total sin impuesto: ${this.calcularTotal()}`);
        console.log(`Total con impuesto: ${this.calcularTotal() + this.calcularImpuesto()}`);
        console.log('Productos:');
        for (let producto of this._productos) {
            let precioProducto = producto.precio;
            if (Orden.descuentosPorCategoria[producto._categoria]) {
                precioProducto *= (1 - Orden.descuentosPorCategoria[producto._categoria]); // Aplicar descuento
            }
            console.log(`- ${producto._nombre}: $${precioProducto}`);
        }
    }

    ordenarPorPrecioDescendente() {
        this._productos.sort((a, b) => b.precio - a.precio);
    }
}

let producto1 = new Producto(1, 'Televisor', 1000, 'Electronica', 5);
let producto2 = new Producto(2, 'Mouse', 50, 'Electronica', 10);
let producto3 = new Producto(3, 'Sofá', 1500, 'Muebles', 7);
let producto4 = new Producto(4, 'Vestido', 300, 'Ropa', 15);
let producto5 = new Producto(5, 'Mesa', 700, 'Muebles', 50);

Orden.setDescuento('Electronica', 0.5);
Orden.setDescuento('Ropa', 0.2);
Orden.setDescuento('Alimentos', 0.05);
Orden.setDescuento('Accesorios', 0.15);
Orden.setDescuento('Muebles', 0.05);

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden1.agregarProducto(producto4);
orden1.agregarProducto(producto5);
orden1.ordenarPorPrecioDescendente();
orden1.mostrarOrden();