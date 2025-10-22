// Estructura de control condicionales

let frio = true 
let temperatura = 10

//clasico

if(frio){
    console.log("Me abrigo")
} else {
    console.log("No me abrigo")
}

//else if

if(temperatura <= 10){
    console.log("Me pongo campera")
} else if(temperatura > 10 && temperatura < 18){
    console.log("Me pongo un buzo")
} else {
    console.log("No me abrigo")
}

//If ternario - reducido

//PRIMER EJEMPLO
frio ? console.log("Me abrigo") : console.log("No me abrigo")
//condicion es frio
//? es If , es como decir hace frio? TRUE porque es booleano
// : es EL ELSE o "si no..." 

//SEGUNDO EJEMPLO
temperatura <= 10 ? console.log("Me pongo campera")
: temperatura > 10 && temperatura < 18 ? console.log("Me pongo un buzo")
: console.log("No me abrigo")

//? else if es : y lo cierra a la condicion nueva con el ? y la respuesta console.log
 