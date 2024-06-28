
let numero1 = "ingrese un numero"
let num1 = prompt(numero1)


let numero2 = "ingrese otro numero"
let num2 = prompt(numero2)


let multiplicar = function(num1 , num2){
    return `el resultado de multiplicar ${num1} y ${num2} es : ${num1 * num2}`
}

console.log(multiplicar(num1,num2))
