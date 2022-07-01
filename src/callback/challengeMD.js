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
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4){
            if(xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error('Error' + urlApi);
                return callback(error, null);
            }
        }
        } 
    xhttp.send();
}