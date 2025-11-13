/*Pilares del POO
Encapsulacion: Sirve para ocultar detalles internos del objeto y exponer solo lo necesario


*/

class Auto{
     //Atributo
    _precio;
   //Funcion constructora
    constructor(precio){

         // en js para utilizar la encapsulacion utuilizamos _ como prefijo
         //Propiedad es privada -> Solo se accede dentro de la clase
        this._precio = precio
    }

    //Metodos getter para obtener el valor de precio
    getPrecio(){
        return this._precio
    }

    setPrecio(nuevoPrecio){
        if(nuevoPrecio > 0){
            this._precio = nuevoPrecio
        }else{
            console.log("El precio debe ser mayor a 0")
        }
    }
}