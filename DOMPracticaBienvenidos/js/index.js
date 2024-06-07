
    let saludo = document.querySelector(".saludo")
    console.log(saludo)


let mensaje = "Bienvenidos a mi sitio";
alert(mensaje);

let confirmar = "¿Está seguro de querer avanzar?";
let decision = confirm(confirmar);
if (decision === true){
    document.querySelector(".saludo").innerText = "Qué alegría que quieras continuar tu visita";
} else{
    document.queryselector(".saludo").innerText = "lamentamos que no quieras continuar tu visita"
}

let mens = "Cual es tu nombre?"
let nom = prompt(mens);
document.querySelector("h1").innerText = "BIENVENIDO" + " " + nom

let data_edad = "cuantos anios tenes?"
let edad = prompt(data_edad)

//if (edad < 17) {
//   let no_mostrar = document.querySelector(".contenido-bloqueado")
//    no_mostrar.style.display = 'block';
// }  

let progra_preg = "Te gusta la programacion?"
let progra = confirm(progra_preg)

let div_img = document.querySelector(".background-img");
if (progra == true){

    div_img.innerHTML = '<img src= "img/gatito.jpeg"/>';

} else{

    div_img.innerHTML = '<img src="img/programmer.jpeg"/>'

}

let eleccion_img = "Ingrese la URL de la imagen que desea ver"
let img_elegida= prompt(eleccion_img)
let img_avatar = document.querySelector(".avatar");
img_avatar.src = img_elegida
    
//CONSULTAR LA LINEA 46. IMG_AVATAR.SRC = 

let pelicula = {
    nombre: " ",
    director:" ",
    duracion:" ",
    actor:" "
}

let nombre = "Ingrese el nombre de una pelicula";
nombre_peli= prompt(nombre);

let director = "Ingrese el nombre del director de la pelicula elegida"
let director_peli = prompt(director);

let duracion = "ingrese a duracion en segundos de la pelicula"
duracion_peli = prompt(duracion)

let actor = "ingrese el actor de la pelicula"
actor_peli = prompt(actor)


pelicula.nombre = nombre_peli
pelicula.actor = actor_peli
pelicula.director = director_peli
pelicula.duracion = duracion_peli

console.log(pelicula)
