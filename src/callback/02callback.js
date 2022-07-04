const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://swapi.dev/api/';

function fetchData(urlAPI, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlAPI, true);
    xhttp.onreadystatechange = function (event) {
        if(xhttp.readyState === 4){
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error('Error' + urlAPI);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

fetchData(`${API}/people/`, function(error1, data1){
    if (error1) return console.error(error1);
    console.log(data1);
    /*
    Hasta aquí imprime la info general de la sección people, no obostante,
    solo se accede a un personaje de de people si accedo con la url exacta como parámetro de fetchData,
    no si lo selecciono de la llamaa en el console.logg.

    Check doc about fakeapiplatzi to understant better how works it
    
    
    
    */
    fetchData(`${API}/people/${data1[0].id}`, function (error2, data2) {
        if (error2) return console.error(error2);
        console.log(data2.name);

    })
    // fetchData(`${API}/people/${data1[0].id}`, function(error2, data2){
    //     if (error2) return console.error(error2);
    //     fetchData(`${API}/`, function(error3, data3){
    //         if (error3) return console.error(error3);
    //         console.log(data1);
    //         console.log(data2.title);
    //         console.log(data3.name);
    //     })
    // })
    
})