class Persona{
    nombre;
    constructor(nombre, nacionalidad){
        this.nombre = nombre;
    }
}

class Autor extends Persona{
    nacionalidad;
    constructor(nombre, nacionalidad){
        super(nombre);
        this.nacionalidad = nacionalidad;
    }
}

class Libro{
    //atributos
    nombre;
    ISBN;
    genero;
    autor;
    paginas;
    paginaActual;
    anio;
    //constructor
    constructor(nombre, ISBN, genero, autor, paginas, paginaActual, anio){
        this.nombre = nombre;
        this.ISBN = ISBN;
        this.genero = genero;
        this.autor = autor;
        this.paginas = paginas;
        this.paginaActual = paginaActual;
        this.anio = anio;
        this.leido = false;
    }
    //metodos
    leer(paginasLeidas = 1){
        this.paginaActual += paginasLeidas;
        console.log(`Leyendo ${paginasLeidas} paginas de ${this.nombre}`);
        
        if(this.paginaActual >= this.paginas){
            this.marcarComoLeido();
        }
    }
    marcarComoLeido(){
        this.leido = true
        console.log(`Libro ${this.nombre} marcado como leido`);
}

    getInfo(){
        console.log({
            titulo: this.titulo,
            ISBN: this.ISBN,
            genero: this.genero,
            autor: this.autor,
            paginas: this.paginas,
            paginaActual: this.paginaActual,
            anio: this.anio,
            leido: this.leido   
        })
    }

}

let garciaMarquez = new Autor("Gabriel Garcia Marquez", "Colombiana");
let aniosDeSoledad = new Libro("Cien Años de Soledad", "123456789", "Realismo Mágico", garciaMarquez, 417, 0, 1967);
 





