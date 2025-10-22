//Arrays 

// Como accedemos a los indices de un array
//Array es zwero based, signfica que su primer indice es 0
let nums = [ 10, 1, 2, 3, 4, 5, 6, [2, 3, 4, { nombre: "javier", apellido: "lopez"}]  ]
//objeto posicion 3 del indice 7, el punto es el nombre
//podemos entrar a un indice dentro de un indice, osea la violeta
console.log(nums[7][3].nombre)
//nombre seria la clave dentro del indice 3 y lo que sale en consola su valor osea javier

// mi ejercicio
let nums1 = [10, 1 , 2, 3, [2, 3, 4, { nombre: "victoria"}] ]

console.log(nums1[4][3].nombre)

//Indice empieza desde 0
//Lenght empieza desde 1 y te dice la calidad total de elementos
// Como acceder -> largo del array 
console.log(nums.length)

//Como acceder al ultimo valor 
// largo del array - 1 = ultima posicion
console.log(nums[nums.length - 1])
nums[7][3].apellido = "gonzales"
console.log ("despues de modificar", nums [7][3])











//booleanos, solo pueden ser true or false.
//ganas||compania tienen de OPERADOR  al OR ||, esta es parte sera TRUE al menos si una de las dos variables es TRUE.

//(false||true => true)

  let ganas = false
  let compania = true
  let plata = true

  //La condicion del IF es VERDADERA, asi que se ejecuta la primera parte

  if((ganas|| compania) && plata){
    console.log("salgo")
  } else{
    console.log("no salgo")
  }

  //true && plata, significa Y, la condicion completa sera TRUE solo si AMBOS LADOS son TRUE. 
  //como plata es TRUE && TRUE -> TRUE.

