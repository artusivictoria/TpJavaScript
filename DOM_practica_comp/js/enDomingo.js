//EJERCICIO 1

let pregunta = "Que dia es hoy?"
resp = prompt(pregunta)

let capturar = document.querySelector(".respuesta")

if (resp == "domingo") {
    capturar.innerText = '¡Pongamos la olla, hoy se comen pastas!"'
}else{
        capturar.innerText = "¡Pongamos la olla, hoy se comen pastas!"
    }

