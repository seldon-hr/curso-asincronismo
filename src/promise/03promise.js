// Usamos un constructor para crear un objeto Promise
/* Añadimso dos parámetros éxito y rechazo,
    funcioón como condition

*/


const myPromise = new Promise((resolve, reject) => {
    //condition
    let condition = 10;

    if (condition > 5) {
        resolve('Promise is resolved succesfully');
    } else {
        reject('Promise is rejected');
    }
});

/* Dos casos sobre lo que ocurrar con la promsea
    Si es resuelta que va a ocurrir
    de lo contrario es el otro paso.
    .then para promesa resuelta
    .catch para lo contrario
*/

myPromise
    .then((message) => {
        console.log(message); 
    }).catch((message) => {
        console.log(message);
    })

