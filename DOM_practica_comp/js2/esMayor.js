
//EJERCICIO 2
console.log("hola")
let numero_1 = "Ingrese un numero"
let numero_2 = "Ingrese un numero"

let num_1 = prompt(numero_1)
let num_2 = prompt(numero_2)

let resp = document.querySelector(".respuesta")
if (num_1 > num_2){
    resp.innerText =  num_2 + "es el numero mayor"
} else{
    resp.innerText =  num_2 + " es el numero mayor"
}