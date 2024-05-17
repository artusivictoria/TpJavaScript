//b//

let mensaje1 = "Como te llamas?"
let nombre = prompt(mensaje1)
console.log(nombre)

//c//

let mensaje2 = "cual es tu edad?"
let edad = prompt(mensaje2)
console.log(edad)

//d//

let mensaje3 = "Te gustan los deportes?"
let respuesta = confirm(mensaje3)
console.log(respuesta)

//e//
let mensaje4 = "Muchas gracias " + nombre + " por responder nuestras preguntas"
let agradecer = alert(mensaje4)

//f//

let usuario = {
    nombre_user: nombre,
    edad_user: edad,
    deportes: respuesta,
    deportista_profesional: function(respuesta){
        if (respuesta == true){
            return console.log("Si, soy fan de los deportes")
        }

        else(respuesta != true);{
            return console.log("No soy tan fanaun de los deportes")
        }
}}

