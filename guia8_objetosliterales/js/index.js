//ejercicio 1 y 2//

let misDatos = {
    nombre: "Victoria",
    apellido: "Artusi",
    dni: 46393097,
    comidasFavoritas: ["pasta", "pizza" , "tiramisu"],
    saludar: function(edad){
        return "Hola mi nombre es " + this.nombre + " " + this.apellido + " y tengo " + edad + " anios. Mi primer comida favorita es " + this.comidasFavoritas[0]
    }}


console.log(misDatos.nombre)
console.log(misDatos.dni)
console.log(misDatos.saludar(19))

//ejercicio 3//

let auto = {
    marca: 'peugeot',
    modelo: "208",
    anio: 2021,
    color: "blanco",
    posicion: 0,
    avanzar: function(n){
        return this.posicion +=n
    },
    retroceder: function(n){
        return this.posicion -=n
        }
}
console.log(auto.avanzar(2))
console.log(auto.avanzar(1))
console.log(auto.retroceder(2))
console.log(auto.posicion)

//ejercicio 4//

let NuevoAuto = {
    marca: 'peugeot',
    modelo: "208",
    anio: 2021,
    color: "blanco",
    posicion: 0,
    moverse: function(n){
        return this.posicion += n
    }
}

console.log(NuevoAuto.moverse(4))
console.log(NuevoAuto.moverse(-2))


//ejercicio 5//

let ironMan = {
    nombre: "IronMan",
    equipo: "Avangers",
    poderes: ["Volar", "Lanzar misiles", "Disparar láser"],
    energia: 100,
    getPoder: function(num){
        return ("Poder Elegido de " + this.nombre + ": " + this.poderes[num] + ". Energía restante: " + (this.energia -=10))
    }

}

let Hulk = {
    nombre: "Hulk",
    equipo: "Avangers",
    poderes: ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder: function(num){
        return ("Poder Elegido de " + this.nombre + ": " + this.poderes[num] + ". Energía restante: " + (this.energia -=10))
    }

}

console.log(ironMan.getPoder(1))
console.log(Hulk.getPoder(0))


//ejercicio 6//
