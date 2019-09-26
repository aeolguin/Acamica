// Declaraciones

var Persona = function (nombre, apellido, edad, dni, saldoCaja) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.dni = dni;
    this.saldoCaja = saldoCaja;
}

var Banco = function (nombre, sucursal, cliente, numCuenta) {
    this.nombre = nombre;
    this.sucursal = sucursal;
    this.cliente = cliente;
    this.numCuenta = numCuenta;
}


//Declaracion del objeto cajero
var Cajero = function (nombre, red, costoPorOperacion) {
    this.nombre = nombre;
    this.red = red;
    this.costoPorOperacion = costoPorOperacion;
}

Cajero.prototype.chequearUsuario = function (banco, data) {
    if (banco.cliente.apellido === data){
    console.log("el chequeo de nombre funciono")
    }else {
        console.log("parece que no funciono")
    }
    
}


// Función que inicializa el programa

function iniciar () {
    console.log("hola");
}


    var clientes = new Persona ("Ariel", "Olguin", 41, 26359860, 500);
    console.log(clientes);
    var bancoProvincia = new Banco ("Banco Provincia", "retiro", clientes, 123456);
    console.log(bancoProvincia)
    var cajero1 = new Cajero ("Cajero1", "link", 30);
    console.log(cajero1);

    cajero1.chequearUsuario(bancoProvincia, "Olguin");


