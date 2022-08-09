import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

/*
 Función de fetcData 
Crear una función principal para consumir el Api de fakeapliplatzi. 
Esto pasando nuestra constante 'API' com el link principal, pero es necesario añadir un endpoint, que sería
un punto claro de destino como: products, categores, o user. Tal endpoint lo asignaremos posteriomente

*/
async function fetcData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
    /* 
    Ir por los datos
    transformalos
    regresarlos a nuestro usuario
    */
}

const anotherFunction = async (urlApi) => {
    // async con funciones flecha, y arriba con una función común
    try {
        /*
         Función asíncrona que es anotherFunction donde hacemos nuestro llamados
         1. Nos traemos todos los productos
            Con nuestra variable 'products' ejecutamos la función principal 'fetchData', le colocamos la url base
            almacenada en urlApi, pero aquí ya le estamos agregando el endpoint. /products, Así obtenemos 
            el array con los productos.           
        */
        const products = await fetcData(`${urlApi}/products`);
        
        const product = await fetcData(`${urlApi}/products/${products[0].id}`);
        const category = await fetcData(`${urlApi}/categories/${product.category.id}`);

        console.log(products);
        console.log(product.title);
        console.log(category.name);

    } catch (error) {
        console.error(error);
    }
}

anotherFunction(API);