
let nom = 'ingrese su nombre'
let nombre = prompt(nom)

let ed = 'ingrese su edad'
let edad = prompt(ed)

console.log(edad)

let deportes ='te gustan los deportes'
let fanDeportes = confirm(deportes)

console.log(fanDeportes)

alert(`gracias ${nombre} por responder nuestras preguntas`)


let info_usuarioOB = {
    nombre: nombre , 
    edad: edad,
    deportistaProfesional: function(fanDeportes){
        if (fanDeportes == true){
            return '“Si, soy fan de los deportes'
        }else{
            return 
            '“No soy tan fan aún de los deportes'
        }
    }
}

console.log(info_usuarioOB.deportistaProfesional(fanDeportes))