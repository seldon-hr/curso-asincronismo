const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; //Instanciamos este páquete xmlhttprequest
const API = 'https://api.escuelajs.co/api/v1'; //API que vamos a trabajar

/*
Status
    0 no inciado
    1 loading
    2 cuando ya se ejecuto send
    3 Interactuando con la solicitud
    4 Se completo la llamada

Estado de respuesta HTTP
    1. Respuesta informativas (100-199)
    2. Respuestas satisfactorias (200-299)
    3. Redirecciones (300-399)
    4. Errores de los clientes (400-499)
    5. Errores de los servidores (500-599)

*/

function fetchData(urlApi, callback) { // Función que genera la conexión, recibe la urlApi y un callback
    let xhttp = new XMLHttpRequest();   //Nueva instancia de xmlHttp... 
                                        // Con el operador 'new' creamos una nueva instancia, ya que es un constructor

    xhttp.open('GET', urlApi, true); //Abrimos una nueva conexión, con método para obener 'GET', la urlAPI, y true para que sea asincronismo.
    xhttp.onreadystatechange = function (event) { // Al momento de que est suceda, escuchamos el estado.
        if (xhttp.readyState === 4){ //Esperamos que nuestro estado sea igual a 4 (Se completo la llamada)
            if(xhttp.status === 200) { // Estado anidado que sea 200 (Solicitud correcta)
                callback(null, JSON.parse(xhttp.responseText))  //Retornamos callback null en error y convertimos datos a JSON con 'parse'
            } else {
                const error = new Error('Error' + urlApi);  //Recolectamos el error, + urlApi
                return callback(error, null); //Retornamos callback con el error y null(para los datos)
            }
        }
        } 
    xhttp.send();
}

fetchData(`${API}/products`, function(error1, data1){
    if (error1) return console.error(error1);
    console.log(data1[0]);

    // fetchData(`${API}/products/${data1[0].id}`, function(error2, data2) {
    //     if(error2) return console.error(error2);
    //     fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
    //         if(error3) return console.error(error3);
    //         console.log(data1[0]);
    //         console.log(data2.title);
    //         console.log(data3.name);
    //     })
    // })
})