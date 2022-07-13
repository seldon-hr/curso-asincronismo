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

fetchData(`${API}/people/1`, function(error1, data1){
    if (error1) return console.error(error1);
    
    fetchData(`${API}/people/1`, function (error2, data2) {
        if (error2) return console.error(error2);
        
        // fetchData(`${API}/people/1`, function (error3, data3) {
        //     if (error3) return console.error(error3);
            
            console.log(data1.name);
            console.log(data2.birth_year);
            console.log(data1.films)

        // })
        
 
    })
    /*
    Hasta aquí imprime la info general de la sección people, no obostante,
    solo se accede a un personaje de de people si accedo con la url exacta como parámetro de fetchData,
    no si lo selecciono de la llamaa en el console.logg.

    Check doc about fakeapiplatzi to understant better how works it
    
    
    Ahora veo que el problema con llamar a un personaje puede ser que estos no poseen un id como propiedad
    como ocurre con fakeplatziapi, y se llaman por una url exacta, por eso si tengo la url exacta ahora si
    puedo llamar a sus propiedades por ejemplo de luke, mientras en fakeapiplatzi son propiedades las que llamo
    
    En la segunda llamada intente aunar con la variable que llamo, pero esta no me entrega, checar como se lee.

    
    Comenentario final
    La forma en la cual uno puede acceder a la información depende de cómo esta organizada la estructura de la API
    como es que esta fue puesta sus propiedades y objetos, si posseen un id, esto facilita la selección como
    pasa en 'fakeapiplatzi' cada prodcucto contiene un id, lo contrario ocurré con 'star wars api', esta no
    tiene id como propiedad de personajesm, se divide por url, por ejemplo API/people, es la ruta para acceder
    a toda las personas, para un personaje tenemos que añadirlo dentro de esta url así, API/people/1
      Este resultado muestra al personaje de Luke.

    
    */








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