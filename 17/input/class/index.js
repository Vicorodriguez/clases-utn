document.addEventListener("DOMContentLoaded", function(){


//selectores
//getElementById -> solo para id`s
const parrafoBonito = document.getElementById("parrafo-bonito")
//getelementclassname es solo para las clases, trae varios htmlcollection
const listItem = document.getElementByClassName ("list-item")

const list = document.querySelector(".lista-desordenada")

//funciones
// queremos crear un elemento y aniadirlo a la lista
function crearElementoListaFinal () {
    // createElement -> crea un elemento de HTML 
    let newLI = document.createElement("li")
    newLI.TextContent = "Elemento creado al final"

    //appenchild -> aniade un elemento al final
    list.appendChild(newLI)
} 

function crearElementoListaInicial(){
     let newLi = document.createElement ("li")
     newLi.TextContent = "Elemento creado al principio"
     //insertBefore -> aniade un elemento antes que otro
     list.insertBefore(newLi, listItem [0])
}


















})