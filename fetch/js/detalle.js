let queryString = location.search //uso propiedad .search del metodo location que me trae la wquerystring en formato texto
let queryStringObj = new URLSearchParams(queryString) // defino metodos utiles para trabajar con los parametros de la URL
let id = queryStringObj.get('id') //obtengo id 

//armo nuevo fetch

let url = `https://rickandmortyapi.com/api/character/${id}`

fetch(url)

    .then(function(response){
        return response.json()
    })

    .then(function(data){

        //Caoturo el dominio
        let nom_pers = document.querySelector('.nom_pers')
        let status = document.querySelector('.status')
        let especie = document.querySelector('.especie')
        let img = document.querySelector('.img')

        //agrego la info de las querystring

        nom_pers.innerText = data.name
        status.innerText += data.status
        especie.innerText += data.species
        img.src = data.image

    })

    .catch(function(error){
        console.log('el error es: ' + error)
    })






