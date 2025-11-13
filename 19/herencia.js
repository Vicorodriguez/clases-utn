//Auto -> Deportivo / Sedan / SUV / De carrera

//Vehiculo -> Auto / Moto / Camioneta / Camion

class Vehiculo {
    //Atributos
    constructor(marca, modelo, anio ) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }       
    //Metodos
    encender() {
        console.log("El vehiculo esta encendido");
    }

}

//Clase hija
class Auto extends Vehiculo {
    constructor(marca, modelo, anio, tipo) {        
        super(marca, modelo, anio); 
         //Llamada al constructor de la clase padre
        this.tipo = tipo;
    }   
    abrirPuertas() {
        console.log("Las puertas del auto estan abiertas");
    }
}

let argos = new Auto("Chevrolet", "Argos", 2021, "Sedan");
argos.abrirPuertas();