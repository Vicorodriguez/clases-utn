// Quiero saber a que generacion pertenece una persona sefun su anio de nacimiento

let anioNacimiento = 1971

switch(true){
    case (anioNacimiento >= 1920) && (anioNacimiento <= 1945):
    console.log("Generacion silenciosa")
    break;
    case (anioNacimiento >= 1946) && (anioNacimiento <= 1964):
    console.log("Baby boomer")
    break;
    case (anioNacimiento >= 1965) && (anioNacimiento <= 1979):
    console.log("Generacion X")
    break;
    case (anioNacimiento >= 1980) && (anioNacimiento <= 1996):
    console.log("Generacion millenial")
    break;
    case (anioNacimiento >= 1997) && (anioNacimiento <= 2010):
    console.log("Generacion Z")
    break;
    default:
        console.log("Sos de otra generacion")
        break;
}