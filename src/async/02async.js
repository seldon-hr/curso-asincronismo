import fetch from "node-fetch";
const API = 'https://swapi.dev/api/'

async function fetcData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}


const anotherFunction = async (urlApi) => {
    const people = await fetcData(`${urlApi}/people/1`);
    console.log(people.name);
}

anotherFunction(API);
