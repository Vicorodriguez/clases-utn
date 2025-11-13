

/*alert("hola")
let mensajePrompt = prompt("Ingrese su nombre")
console.log(mensajePrompt)
*/

function registrarProductos(){
/*
- Array -> guardar los productos
- Objetos -> cada producto
- Input (Prompt) -> Datos de entrada
- Una funcion
- Un bucle
- Una condicion que termina el bucle
*/
const productosCliente = []
let agregarProductos = true;

while (agregarProductos) {
   let producto = prompt("Ingresa productos. Para finalizar la compra, escribe un punto: .");
//Validar -> buena practica. Necesaria para la integridad del sistema.
if (producto === "."){
    agregarProductos = false;
    //Validamos que el prodcuto no este vacio
} else if ( producto !== ""){
  //con Object keys listamos las keys que tenemos
   const productosDisponibles = Object.keys (listaPrecios)
   
// debe ser identico al nombre en la lista de precios
//trim ->poda los espacios que hay leading y trailing de una palabra
//tolowercase es para convertir todo en miniscula

const productoNormalizado = producto.toLowerCase().trim();

let productoEncontrado = false

for (let index = 0; index < productosDisponibles.length; index++) {
    const productoDisponible = productosDisponibles[index];
    if(productoDisponible === productoNormalizado){
        productosCliente.push(productoNormalizado);
        productoEncontrado = true;
        break; //detenemos la busqeda
    }
    
}
if(!productoEncontrado){
    alert("Producto no existe")
}
} else {
    alert("Por favor ingresar un producto valido")
} 
}
console.log(productosCliente)
return productosCliente
}
const productosRegistrados = registrarProductos()

// Lista de precios
//Nombre y precio
// objeto tipo json, donde la key es un string
const listaPrecios = {
    "pan": 3000,
    "cafe": 7000,
    "aceite": 1500,
    "leche": 1000,
    "fideos" : 700

}

function calcularTotal (){
    let totalAPagar = 0;
    let productosNoEncontrados = []
   
    productos.forEach( producto => {
        // Podemos acceder de forma dinamica a las propiedades de un objeto
        // Acceso a una clave con el mismo nombre que el producto
       //obtenemos el valor de la key que es el precio
       const precio = listaPrecios[producto]
       
       // El producto llego pero no esta en la lista de precios
       if(precio !== undefined) {
        totalAPagar += precio
        console.log((totalAPagar))
        console.log (`sumado: ${producto} ($${precio})`)
       } else {
        console.log(`El producto "${producto}" no fue encontrado en la lista de precios`)
        productosNoEncontrados.push(producto)
       }
    } )  
    
    console.log(`El total a pagar es: ${totalAPagar}`)

    console.log(` Productos no encontrados: ${productosNoEncontrados}`)
    return totalAPagar
}

