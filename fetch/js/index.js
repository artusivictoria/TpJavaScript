
fetch('https://rickandmortyapi.com/api/character')

    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data)
        let info = data.results //xq necesito la seccion results de la api

        let character_list = document.querySelector('.characterList')
        let characters = ''

        for (let i=0;  i < info.length ; i++){ 
            characters += `<article>
                            <img src= ${info[i].image} alt='${info[i].name}'>
                            <p>Status:${info[i].status}</p>
                            <a href= detalle.html?id=${info[i].id}> Name: ${info[i].name}</a>
                           
                        </article>`

        }
        character_list.innerHTML = characters
        console.log(characters)
        
    })

    .catch(function(error){
        console.log('El error es: ', error)

    })