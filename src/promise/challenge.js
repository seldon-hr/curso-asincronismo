/*
Por medio de FETCH podemos realizar peticiones HTTP asíncronas de JS con promesas
Instalamos la librería debido a que estamos ejecutando js por medio de node.
Usando Fetch API la cual nos proporciona una interfaz más comoda JS para acceder y manipular.
fetch() es un método global.
*/

import fetch from "node-fetch"; //Usar fetch es necsario instalar la librería fetch
const API = "https://api.escuelajs.co/api/v1";

// Una función que solo nos retorna con el método global. Y posteriormente usarlo a nuestra necesidades.
function fetchData(urlAPI) {
    return fetch(urlAPI);
};

// fetchData(`${API}/products`)
//     .then(response => response.json()) //La información que llega la transforma en objeto .json
//     .then(products => {          //Con lo que hemos obtenido ahora si mostramos la información.
//         console.log(products);
//     })
//     .then(() => {
//         console.log('Hola');
//     })
//     .catch(error => console.log(error));

fetchData(`${API}/products`)
    .then(response => response.json()) //Recibido a un objeto, ya no usamos 'return' sino con la mism 'response' de las promesas
    .then(products => {
        console.log(products);
        return fetchData(`${API}/products/${products[0].id}`)//retornamos para poder llamar nuevamente a esta api.
    })
    .then(response => response.json()) //Con lo que acabamos de llamar lo transformamos de nuevo.
    .then(product => {
        console.log(product.title) //Muestra del producto
        return fetchData(`${API}/categories/${product.category.id}`) //Nuevo llamado a otra categoría.
        //Cada uno de estos llamados se vuelven a hacer porque se va a otra apartado no al mismo que se llamo en un principio.
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);
    })
    .catch(err => console.log(err))
    .finally(() => console.log('Finally'))