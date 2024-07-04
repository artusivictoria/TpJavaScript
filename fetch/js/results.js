//obteniendo los datos de la URL

let qsresults = location.search;
console.log(qsresults)
let qsresultsObj = new URLSearchParams(qsresults)
let nameresults = qsresultsObj.get('q')

let urlR = `https://rickandmortyapi.com/api/character/?name=${nameresults}`

fetch(urlR)

    .then(function(response){
        return response.json()
    })

    .then(function(data){

        let searchR = document.querySelector('.search-results');

        for( let i = 0 ; i < data.results.length ; i++){

            let infoR = data.results[i]

            searchR.innerHTML += `<article>
                                    <img src="${infoR.image}" alt='${infoR.name}'/>
                                    <p>Name: ${infoR.name} </p>
                                    <p>Status:${infoR.status} </p>
                                </article>`
        }

    })

    .catch(function(error){
        console.log('el error es: ' + error)
    })