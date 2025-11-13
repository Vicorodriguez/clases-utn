//Tarea 1.
const taskInput = document.getElementById("taskInput")
const addTaskBtn = document.getElementById("addTaskBtn")
const taskList = document.getElementById("taskList")

//Tarea 2. Creamos un bptond de eliminar (Reutilizable)

function createDeleteButton(){
      //crear el boton
      document.createElement("button")
      // Le nadiamps el texto al boton
      deleteBtn.textContent = "Eliminar"
      //Le andiaos una clase
      deleteBtn.className = "delete-btn"

      deleteBtn.addEventListener("click", function(){
           this.parentNode.style.transform = "translateX(100%)"
           this.parentNode.style.opacity = '0'

           setTimeout(() =>{
            this.parentNode.remove()
            updateTaskCounter()
           }, 300)
      })
      return deleteBtn
}


//Creamos el span de tarea

function createTaskSpan(text) {
    //creamo el span de tarea
    const taskSpan = document.createElement ("span")
    //le asignamos a su contenido de texto 
    taskSpan.textContent = text
    taskSpan.className = "task-text"

    taskSpan.addEventListener("click", function(){
        this.parentNode.classList.toggle("completed")
        
    })

    taskSpan.addEventListener("keypress",function(evento){
        if(evento.key === "Enter"){
            evento.preventDefault()
            this.parentNode.classList.toggle("completed")
            updateTaskCounter()
        }
        return taskSpan

    })

    function validateInput() {
    //Quitamos espacios delante y detras del texto
    const taskText = taskInput.value.trim()
    //Validamos si nos llega texto
    if(!taskText){
        taskInput.style.borderColor = "red"
        taskInput.placeholder = "¡Escribe una tarea!"
        taskInput.value = ""
        //Devolver una respuesta negativa
        return false

    }

    taskInput.style.borderColor = '';
    taskInput.placeholder = "Escribe una nueva tarea..."
    return true

}

































// Tarea 1. Referenciamos nuestros elementos del html
const taskInput = document.getElementById("taskInput")
const addTaskBtn = document.getElementById("addTaskBtn")
const taskList = document.getElementById("taskList")


// Tarea 2. Creamos boton de eliminar dentro de la tarea

function createDeleteButton() {
    // Crear el boton
    const deleteBtn = document.createElement("button")
    // Le añadimos el texto al boton
    deleteBtn.textContent = "Eliminar"
    // Le añadimos una clase
    deleteBtn.className = "delete-btn"

    deleteBtn.addEventListener("click", function() {
            this.parentNode.remove()
    })
    return deleteBtn
}

// 3. Creamos el span de tarea
function createTaskSpan(text) {
    // Creamos el span de tarea
    const taskSpan = document.createElement("span")
    // Le asignamos a su contenido de texto el argumento
    taskSpan.textContent = text
    // Añadimos la clase task-text
    taskSpan.className = "task-text"

    // Clicn en el texto y se completa la tarea
    taskSpan.addEventListener("click", function() {
        this.parentNode.classList.toggle("completed")
    })

    // Extra soporte para teclado
    taskSpan.addEventListener("keypress", function(evento) {
        // evento -> tiene detalles del evento sucedido, ej que tecla se presionó
        if(evento.key === "Enter"){
        }
    })

    return taskSpan
}

// 4. Validamos el input

function validateInput() {
    // Quitamos espacios delante y detras del texto
    const taskText = taskInput.value.trim()

    // Validamos si nos llega texto
    if(!taskText){
        taskInput.style.borderColor = "red"
        taskInput.placeholder = "¡Escribe una tarea!"

        // Devolver una respuesta negativa
        return false
    }

    // si nos dan texto limpiamos los estilos anteriores
    taskInput.style.borderColor = '';
    taskInput.placeholder = "Escribe una nueva tarea..."
    return true
}


 // Funcion de agregar tarea.

