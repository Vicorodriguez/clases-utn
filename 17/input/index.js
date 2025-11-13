// Escuchar que el documento y su contenido se hayan cargado
// addEventListener -> añadir escucha de eventos
// Utilizamos una funcion como callback
// Una vez que el evento sucede, se ejecuta el callback
document.addEventListener("DOMContentLoaded", function() {
    console.log("Cargado")

    // Selectores
    // querySelector -> .Clase, #Id y Tag
    const textoInput = document.querySelector("#textoInput")
    const colorInput = document.querySelector("#colorInput")
    const fontSize = document.querySelector("#fontSize")
    const bgColor = document.querySelector("#bgColor")
    const resultado = document.querySelector("#resultado")
    const body = document.querySelector("body")
    const bgColorText = document.querySelector("#bgColorText")

    // Funciones
    function actualizarTexto() {

        resultado.style.color = color
    }

    function actualizarFontSize() {
        let size = `${fontSize.value}px`
        // En css font-size // en js fontSize
        resultado.style.fontSize = size
    }

    function actualizarBgColor() {
        let bg = bgColor.value
        body.style.backgroundColor = bg
    }

    function actualizarBgColorText() {
        let bg = bgColorText.value
        resultado.style.backgroundColor = bg
    }


    // Eventos

    // evento input -> Si tiene contenido o este se modifica
    textoInput.addEventListener("input", actualizarTexto)
    colorInput.addEventListener("input", actualizarColor)
    fontSize.addEventListener("input", actualizarFontSize)
    bgColor.addEventListener("input", actualizarBgColor)
    bgColorText.addEventListener("input", actualizarBgColorText)
})
