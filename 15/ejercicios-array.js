/*
2.Agregar un nuevo elemento al final del array:
-Funcion nativa:`push()`
*/

let nombres = ["Juan", "Javier", "Angel", "Ana"]
console.log(nombres.push("Pedro"))
console.log(nombres)
// Un valor - 5
let largo = nombres.length
nombres.push("luis")
console.log (largo)
//Referencia - el valor real
console.log (nombres.length)
/* 
3- Eliminar el ultimo elemento del array:
-Funcion nativa: `pop()`
*/

console.log(nombres.pop())

/* 
4-Agregar un nuevo elemento al principio del array
-Funcion natuva: `unshift()`
*/

console.log(nombres.unshift("Marcos"))
console.log(nombres)

/* 
5-Eliminar el primer elemento del array:
-Funcion nativa: `shift()`
*/
console.log(nombres.shift())
console.log(nombres)

/*
6- Usas `splice` para reemplazar elementos en el medio del array:
-Funcion nativa `splice()`
*/

//reemplacemos al segundo elemento
nombres.splice(1, 1, "javito")
console.log(nombres)

//posicion 1, osea del indice, acordemosnos que el index es 0, 1, 2, etc
//la segunda coma es de cuantos queres borrar, en este caso uno. si fuera dos reemplaza los dos
// la tercera coma es para reemplazarlo con el nuevo string


/*
ITERACION Y TRANSFORMACION:
7- Usar `forEach` para imprimir cada elemento del array:
-Funcion nativa: `forEach()`
*/

//tanto foreach, map, bucle for -> permiten aplicar a cada indice de un array una funcion
//7
nombres.forEach((item, index) => {
    console.log(item,index)
} )

function saludar(nombre) {
console.log(`Hola ${nombre}!`)
}
//le estas pasando a cada uno de los valores del array(item) la funcion y pongo adentro el parametro que va a tener, que es cada uno de mis items 
nombres.forEach(item => saludar(item))
//por cada uno de mis items va a hacer una ejecucion de saludar
// y yo le estoy pasando el nombre (saludar(item))
function despedir(nombre) {
console.log(`Adios ${nombre}!`)
}
nombres.forEach(item => despedir(item)) 

/*
8- Usar `map` para duplicar todos los elementos en un array de numeros:
-Funcion nativa: `map()`

Map ->La diferencia con forEach es que genera un array nuevo con los resultados
*/

let numeros = [1, 2, 10, 22, 44]
//Duplicar todos los numeros del array

function duplicar (num){
    return num * 2
}
//Simplificada con funcion flecha - sin retorno
let resultado = numeros.map (numero => duplicar (numero))

//Mas largo - completa, totalmente explicita
let resultado2 = numeros.map(function (numero){
    return numero * 2
})

//menos simplificada - retorno y llaves
let resultado3 = numeros.map(numero => {
    return numero * 2
})

console.log(resultado, resultado2, resultado3)
//map siempre te devuelve un array
//idealmente tener la funcion a parte, el valor es el index


//9 Filter -> Lee todos los valores y retorna los resultados filtrado
// Crea un array nuevo con todos los valores filtrados
let variosNumeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 44, 99]

//Quiero obtener solo los numeros pares
//siempre num va a ser alusion a lo que esta en las comas
let pares = variosNumeros.filter(num => num % 2 === 0)
let impares = variosNumeros.filter(num => num % 2 === 1)
console.log("pares", pares);
console.log("impares", impares);

let mayoresACinco = variosNumeros.filter(num => num > 5)
console.log(mayoresACinco)

/* 
10- Usar `reduce` para sumar todos los elementos en un array de numeros:
-Funcion nativa: `reduce()`

Acumular los valores en una variable

En el primer parametro tener un valor en el cual se le
iran acumulando los resultados 
En el segundo parametro tenemos el item
Por ejem: es un buen caso de uso para sumar los valores
de un carrito de compras y calcular el total a pagar.
*/

let reduced = variosNumeros.reduce((acumulador, valorActual)=> acumulador + valorActual)
console.log(reduced) 

// Find - Metodo para encontrar "algo especifico", retorna el primer resultado que coincida.
let found = variosNumeros.find(num => ! (num >= 44))
console.log(found) // !(num >= 44) === (num < 44)

//undefined porque no hay numeros mayores a 99
let foundFail = variosNumeros.find(num => num > 99)
console.log(foundFail)


const productos = [
    {nombre: "parlante", precio: 120000},
    {nombre: "teclado", precio: 125000},
    {nombre: "monitor", precio: 200000}
]
// Quiero encontrar el producto que valga 125000 o mas
let productoCaro = productos.find(producto => producto.precio >= 125000)
console.log(productoCaro)

//para encontrar uno solo usasa FIND

// Buscador parcial - porque no necesitas la palabra completa 
let teclado = productos.find (producto =>{
    //Validacion extra - pasar todo a miniscula toLowerCase

    let productoNormalizado = producto.nombre.toLowerCase()
    let busquedaNormalizada = "tecl". toLowerCase()

    return producto.nombre.includes("tecl")
})
console.log  ("teclado", teclado)

//findIndex - en lugar de obtener el producto, quiero el indice 
//donde se encuentra lo que busco

let findIndex = productos.findIndex(producto => producto.nombre === "ratonera")
console.log (findIndex)

//Cuidado con find y findIdex, ya que si no encuntra
//coincidencias retorna -1 y este es truthy
if(findIndex >= 0){
    console.log("true")
} else {
    console.log("false")
}

// Every ->Comprueba si todos los elmentos cumplen una condicion
let socios= [
    {nombre:"gabriel", activo: true},
    {nombre:"marina", activo: false},
    {nombre:"javier", activo: true},
    {nombre:"aristobulo", activo: true},
]
// todos los items en activo deberian ser true para que retorne true
let activos = socios.every(socio =>{
    return socio.activo === true
})
console.log(activos)

// Some -> y si algunos cumplen con mi condicion?
//es como el OR, con que alguno cumpla ya es true
let activos2 = socios.some(socio =>{
    return socio.activo === true
})
console.log({activos2})

// Sort - Podemos ordenar valores de un array?
let sortNormal = variosNumeros.sort()
console.log(sortNormal)

// Ordenamiento ascendente, a es menor va primero
let sortASC = variosNumeros.sort((a,b) => {
    return a - b
})
console.log(sortASC)
//ordenamiento descendente, b es mayor va primero
let sortDESC = variosNumeros.sort((a,b) => {
    return b - a
})
console.log((sortDESC));

let sortStringASC = productos.sort((a, b)=> {
    // A primero que B
    if(a.nombre <b.nombre){
        return -1
    }
    // B primero que A 
    if (a.nombre >b.nombre){
        return 1
    }
    // Si son iguales
    return 0
})

console.log({sortStringASC})

// Split -> se usa en strings, convierte un string en un array separado por un caracter a eleccion

let nums3 = "4, 5, 6, 7, 8, 9, 10"
let newNums3 = nums3.split(",")
console.log (newNums3);

//le pasas un string y lo que le separa, quitar el guion y separalos en un array nuevo
