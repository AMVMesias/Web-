class Conductor {
    #email;
    #licencia;

    constructor(nombre, licencia, email) {
        this.nombre = nombre;
        this.#licencia = licencia;
        this.#email = email;
    }

    registrarRuta(origen, destino) {
        console.log(`Ruta registrada de ${origen} a ${destino} para el conductor ${this.nombre}`);
    }

    getEmail() {
        return this.#email;
    }

    getLicencia() {
        return this.#licencia;
    }
}

class Vehiculo {
    constructor(modelo, placa) {
        this.modelo = modelo;
        this.placa = placa;
    }

    asignarConductor(conductor) {
        this.conductor = conductor;
        console.log(`Vehículo ${this.modelo} asignado al conductor ${conductor.nombre}`);
    }
}

class ConductorVIP extends Conductor {
    constructor(nombre, licencia, email) {
        super(nombre, licencia, email);
    }

    asignarVehiculoPreferido(vehiculo) {
        console.log(`Vehículo preferido ${vehiculo.modelo} asignado al conductor VIP ${this.nombre}`);
    }
}

// Ejemplo de uso
let conductor1 = new Conductor("Juan Perez", "ABC123", "juan.perez@example.com");
conductor1.registrarRuta("Centro", "Norte");

let vehiculo1 = new Vehiculo("Toyota", "XYZ789");
vehiculo1.asignarConductor(conductor1);

let conductorVIP1 = new ConductorVIP("Maria Lopez", "DEF456", "maria.lopez@example.com");
conductorVIP1.asignarVehiculoPreferido(vehiculo1);