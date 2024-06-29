let pregunta = "Queres aplicar dark Mode en el sitio?";
let respuesta = confirm(pregunta);

let mostrar = document.querySelector(".respuesta");
let pantalla = document.querySelector('body');

if (respuesta == true){
    mostrar.innerText  = "Dark Mode Activado";
    let cambiar_color_p = document.querySelectorAll('p');
    cambiar_color_p.style.color = '#fff';
    pantalla.style.backgroundColor = "#444";
} else{

    mostrar.innerText = "OK! Se activara en otro momento";
}