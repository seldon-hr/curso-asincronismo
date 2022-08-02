import fetch from "node-fetch";
const API = 'https://swapi.dev/api/'

function fetchData (urlApi) {
    return fetch(urlApi);
}

fetchData(`${API}/people`)
    .then(response => response.json())
    .then(people => {
        console.log(people);
    })
    .catch(err => console.log(err))
    .finally(()=> console.log('Done'))

    //We are calling star wars api