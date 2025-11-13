class Autor{
    nombre;
    nacionalidad;
    constructor(nombre, nacionalidad){
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
    }
}


class Libro{
    nombre;
    ISBN;
    genero;
    autor;
    constructor(nombre, ISBN, genero, autor){
        this.nombre = nombre;
        this.ISBN = ISBN;
        this.genero = genero;
        this.autor = autor;
    }

}

let alfosinastorni = new Autor("Storni", "Argentina");
let seniordelosanillos = new Libro("", "Realismo Magico", alfosinastorni);