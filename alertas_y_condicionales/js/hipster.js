

let nacion = 'ingrese su nacionalidad'
let nac = prompt(nacion)

let prof = 'ingrese su profesion'
let profe = prompt(prof)

let caminar = 'cuantos km camina por dia?'
let km = prompt(caminar)

let filosofoHipster = function(nac,profe,km){
    if (nac == 'argentina' && profe == 'musico' && km >= 2){
        return "Soy un filósofo hipster"
    }else{
        return 'Aún no soy filósofo hipster'

    }
}

console.log(filosofoHipster(nac,profe,km))