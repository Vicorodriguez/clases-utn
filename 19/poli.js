class Animal {
    hacerSonido() {
        console.log("Sonido genérico de animal");
    }
}

class Perro extends Animal {
    //sobreescritura del método padre
    hacerSonido() {
        console.log("Guau Guau");
    }
}
class Gato extends Animal {
    hacerSonido() {
        console.log("Miau Miau");
    }
}

let firulais = new Perro();
firulais.hacerSonido(); //Guau Guau

let bolaDeNieve = new Gato();
bolaDeNieve.hacerSonido(); //Miau Miau