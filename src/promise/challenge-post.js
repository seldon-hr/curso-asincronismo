import fetch from "node-fetch";
const API ='https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
    //Una const, en este caso vamos a agregar una estructura de datos, porque no vamos a hacer GET, sino
    //POST, publicar.
    //Empezamos usando el mismo método fetch, y lo inciamos con la variable.
    //Posteriormente en el siguiente parámetro un objeto que tendrá la configuración necesaria
    /*Datos como 
        metódo
        mode
        credentials
        headers
         */ 
    const response = fetch(urlApi, { 
        method: 'POST',   
        mode: 'cors', //Permisos que tiene y se pone en cors.
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json' //cabezeras que mandamos por consola, y el valor es de application/json
        },
        body: JSON.stringify(data) //body es la transformación que vamos a mandar, por es JSON.stringfy
        /* 
        Lo que estamos comunican es que vamos a mandar un objeto, pero este incluye las formas para poder
        a hacer una acción de este tipo, e.g. Al principio le decimos que tipo de operación HTTP request vamos a hacer.
        Posteriormente, 
        el modo que son los permiso, 
        credenciales por un tipó de seguridad, en nuestro ejem se puede omitir, no posee credenciales.
        Headers: el tipo de contenido a enviar o que mandamos, como head de un html
        body, ahora siel contenido.
        
        */
    });
    return response;
}


const data = {
    "title": "228",
    "price": 228,
    "description": "I am the product 228",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data));