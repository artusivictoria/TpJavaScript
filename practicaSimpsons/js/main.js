// completar las variables para que el programa funcione
window.addEventListener('load', function() {

    //capturar HTML 
    let titulo = document.querySelector('#titulo');
    let saludo = document.querySelector('#saludo');
    let span = document.querySelector('article span');
    let boton = document.querySelector('.boton')
    titulo.addEventListener('mouseover', function() {

        let nombre = '¿Cómo te llamas?';
        let nom = prompt(nombre)
        
        //elimino la palabra 'EMPECEMOS'
        titulo.style.display = 'none'

        if (nom == null){
            saludo.innerText = 'BIENVENIDO'
        }else{
            saludo.innerText = `Bienvenido ${nom}`
            saludo.style.textTransform = 'uppercase'
        }

        span.style.display = 'flex'
        span.style.justifyContent = 'center'
    })

    span.addEventListener('click' , function(){
        let bienvenida  = document.querySelector('.bienvenida')
        let personajes = document.querySelector('.personajes')

        //oculto section bienvenidos
        bienvenida.style.display = 'none'
        personajes.style.display = 'flex'

    })

    //capturo id de cada elemento

    let bart = document.querySelector('#bart')
    let lisa =  document.querySelector('#lisa')
    let homero = document.querySelector('#homero')
    let marge = document.querySelector('#marge')
    let maggie = document.querySelector('#maggie')
    let milhouse = document.querySelector('#milhouse')
    let burns = document.querySelector('#burns')
    let bobPatinio = document.querySelector('#bobPatinio')
    let flanders = document.querySelector('#flanders')
    let duffman = document.querySelector('#duffman')
    let gorgory = document.querySelector('#gorgory')
    let nelson = document.querySelector('#nelson')

    let spanbart = document.querySelector('#bart span')
    let spanlisa =  document.querySelector('#lisa span')
    let spanhomero = document.querySelector('#homero span')
    let spanmarge = document.querySelector('#marge span')
    let spanmaggie = document.querySelector('#maggie span')
    let spanmilhouse = document.querySelector('#milhouse span')
    let spanburns = document.querySelector('#burns span')
    let spanbobPatinio = document.querySelector('#bobPatinio span')
    let spanflanders = document.querySelector('#flanders span')
    let spanduffman = document.querySelector('#duffman span')
    let spangorgory = document.querySelector('#gorgory span')
    let spannelson = document.querySelector('#nelson span')



    spanbart.addEventListener('click', function(){
        
        if(bart.classList.contains('personaje-seleccionado')){
            bart.classList.remove('personaje-seleccionado')
        }else{
            bart.classList.add('personaje-seleccionado')
        }
    })

    spanlisa.addEventListener('dbclick', function(){
        
        if(lisa.classList.contains('personaje-seleccionado')){
            lisa.classList.remove('personaje-seleccionado')
        }else{
            lisa.classList.add('personaje-seleccionado')
        }
    })

    spanhomero.addEventListener('click', function(){
        
        if(homero.classList.contains('personaje-seleccionado')){
            homero.classList.remove('personaje-seleccionado')
        }else{
            homero.classList.add('personaje-seleccionado')
        }
    })

    spanmarge.addEventListener('mouseover', function(){
        
        if(marge.classList.contains('personaje-seleccionado')){
            marge.classList.remove('personaje-seleccionado')
        }else{
            marge.classList.add('personaje-seleccionado')
        }
    })

    spanmaggie.addEventListener('mouseout', function(){
        
        if(maggie.classList.contains('personaje-seleccionado')){
            marge.classList.remove('personaje-seleccionado')
        }else{
            maggie.classList.add('personaje-seleccionado')
        }
    })

    spanmilhouse.addEventListener('click', function(){
        
        if(milhouse.classList.contains('personaje-seleccionado')){
            milhouse.classList.remove('personaje-seleccionado')
        }else{
            milhouse.classList.add('personaje-seleccionado')
        }
    })

    spanburns.addEventListener('mouseover', function(){
        
        if(burns.classList.contains('personaje-seleccionado')){
            burns.classList.remove('personaje-seleccionado')
        }else{
            burns.classList.add('personaje-seleccionado')
            
        }
    })

    spanbobPatinio.addEventListener('dbclick', function(){
        
        if(bobPatinio.classList.contains('personaje-seleccionado')){
            bobPatinio.classList.remove('personaje-seleccionado')
        }else{
            bobPatinio.classList.add('personaje-seleccionado')
            
        }
    })

    spanflanders.addEventListener('mouseover', function(){
        
        if(flanders.classList.contains('personaje-seleccionado')){
            flanders.classList.remove('personaje-seleccionado')
        }else{
            flanders.classList.add('personaje-seleccionado')}
            
    })

    spanduffman.addEventListener('dbclick', function(){
        
        if(duffman.classList.contains('personaje-seleccionado')){
            duffman.classList.remove('personaje-seleccionado')
        }else{
            duffman.classList.add('personaje-seleccionado')
           
            
        }
    })

    spangorgory.addEventListener('mouseover', function(){
        
        if(gorgory.classList.contains('personaje-seleccionado')){
            gorgory.classList.remove('personaje-seleccionado')
        }else{
            gorgory.classList.add('personaje-seleccionado')
        }
    })

    spannelson.addEventListener('click', function(){
        
        if(nelson.classList.contains('personaje-seleccionado')){
            nelson.classList.remove('personaje-seleccionado')
        }else{
            nelson.classList.add('personaje-seleccionado')
        }
    })    

    boton.addEventListener('click' , function(){
        if (bart.classList.contains('personaje-seleccionado')){
            console.log(bart.querySelector('p').innerText)
        }

        if (lisa.classList.contains('personaje-seleccionado')){
            console.log(lisa.querySelector('p').innerText)
        }

        if (homero.classList.contains('personaje-seleccionado')){
            console.log(homero.querySelector('p').innerText)
        }

        if (marge.classList.contains('personaje-seleccionado')){
            console.log(marge.querySelector('p').innerText)
        }

        if (maggie.classList.contains('personaje-seleccionado')){
            console.log(maggie.querySelector('p').innerText)
        }
        
        if (milhouse.classList.contains('personaje-seleccionado')){
            console.log(milhouse.querySelector('p').innerText)
        }
        
        if (burns.classList.contains('personaje-seleccionado')){
            console.log(burns.querySelector('p').innerText)
        }
        
        if (bobPatinio.classList.contains('personaje-seleccionado')){
            console.log(bobPatinio.querySelector('p').innerText)
        }

        if (flanders.classList.contains('personaje-seleccionado')){
            console.log(flanders.querySelector('p').innerText)
        }

        if (duffman.classList.contains('personaje-seleccionado')){
            console.log(duffman.querySelector('p').innerText)
        }

        if (nelson.classList.contains('personaje-seleccionado')){
            console.log(nelson.querySelector('p').innerText)
        }


    })

})









