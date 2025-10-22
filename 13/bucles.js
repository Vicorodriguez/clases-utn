// Bucles

//Utilidades:
//Rellenar elementos html con datos 
//Busqueda
//Operaciones repetitivas 
//

// var cantidad = 0 

//if(cantidad < 4){
 //   console.log(cantidad)
 //   cantidad++
    //cantidad = cantidad + 1
 //   console.log(cantidad)
//}

//FOR por una cantidad de veces voy a ejecutar mi codigo
var cantidad = 20

// Big 0
    //Inicializacion; Condicion; Actualizacion(incremento)

    //Por que usar for-->tenes todo el control, pero complejo
 for (let index = 0; index < cantidad; index+=5){
    console.log(index)
 }
 //index+= 5,,, el 5 es las interaciones que lleva, vueltas


 //While--> Opera mientras se cumpla una condicion
 //Diferencia con for? Naturalmente no tiene condicion de corte
 //Con for "sabes" cuando termina//con while mientras dure ejecuta

 var contador = 20
 while(contador >0){ 
    console.log("Cuenta regresiva", contador)
    //Contador -- es igual a contador = contador - 1
    contador--;
 }

 //Forzando bucle infinito
//ar contador2 =0
//hile(contador2 < 20){
//  console.log(contador2++)
//

 //Do while
 //Parecido al while, la condicion se evalua despues de la priemra iteracion
 //Garantiza que el codigo se ejecute al menos una vez

 let n = 0

 do{
    console.log("Esto se ejecuta al menos una vez")
    n++
 } while (n<0)
    

//ForEach -> Por cada uno 
//Metodos son funcionalidaddes  
// No se lo define como bucle, pero funciona como uno
//Se usa principalmente en arrays - En estos casos se llama "iteracion"

const nombres = ["Claudio", "Claudia", "Cecilia", "Victoria"]

//Parametro -> un dato que utiliza una funcion/metodo para operar
//Callback como parametro -> Es una funcion que se pasa como dato que opera otra funcion


nombres.forEach(function(nombre){
   console.log("Hola", nombre)
})

//Modularizacion -> separar

function saludar(nombre){
   console.log("Hola", nombre)
}

nombres.forEach( nombre => saludar(nombre))