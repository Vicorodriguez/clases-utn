/*
Funciones:
Codigo reutilizable para tareas espeificas 
Permite:
-eEstructurar codigo
-Modularizar/Componetizacion
-Facil lectura del codigo
-Mantenimiento
-REUTILIZACION DEL CODIGO -> DRY- dont repeat yourself
-Ahorramos tiempo, disminuimos los errores

Reciben datos de entrada que procesan y devuelven resultado (retorno)

Datos de entrada: Parametros
Los valores que volcamos en el parametro
Argumento -> Valor que le damos al parametro
Retorno-> Valores devueltos por la funcion
Importancia del retorno -> Reutilizar el resultado

Momentos:
Definicion -> Donde la creamos, escribimos e implementamos
Invocacion (llamado) -> Donde la utilizamos y la ejecutamos

*/

// Como definimos una funcion

//1. Funcion declarada  (Hoisted)
//Te permite ejecutarla antes de declararla

let resultado = calcularArea(3,10)
console.log(resultado / 2)

function calcularArea (largo, ancho){
    console.log(largo,ancho)
    return largo * ancho
}

console.log (calcularArea(5,8))

let num1 = 5
let num2 = 8
console.log(calcularArea(num1,num2))
//Esto es lo mismo a lo de arriba
//El console.log es para verificar nuestro resultado

// Funcion de expresion (funcion asignada)
//No se puede invocar ni utilziar antes de su declaracion inicializacion
const multiplicas = function(num1,num2){
    return num1 * num2
}

//console.log  (multiplicar(2,2))

//Funciones flecha - Arrow function
//No usa la apalbra reservada function

//  Standard (Usa llaves y usa return)
const saludarUsuario = (nombre) => {
return `Hola ${nombre}`
}

console.log(saludarUsuario("javier"))

// Funcion flecha sintazis concisa // Retorno implicito

//No usa retorno, no usa llaves
//Forma reducida

const restar = (a,b) => a - b
console.log (restar (10,8))

// Mas concisa, si tenes un solo parametro los parentesis son opcionales

const incrementar = n => n + 1
console.log(incrementar(10));

//Funciones dentro de objetos / NOMBRE = CLAVE - JAVIER = VALOR

const usuario = {
    nombre: "Javier",
    saludar: function(mensaje) {
        console.log (`${mensaje}, mi nombre es ${this.nombre}`)
    }
}
usuario.saludar("Hola a todos")

//Sintaxis abreviada / UNIFICA LA CLAVE Y EL VALOR

const auto = {
    arrancar (){
        return "Se encendio el auto"
    },
    marca: "volswagen"
}
console.log(auto.arrancar())