// Usamos un constructor para crear un objeto Promise
/* Añadimso dos parámetros éxito y rechazo,
    funcioón como condition

*/


const myPromise = new Promise((resolve, reject) => {
    //condition
    let condition = 1;

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

/* El mensaje que recibe then or catch es el qu se establee en caso de resolvesrse
    o rechazarse, es decir, si ocurre la condición, pasa el mensaje de resolve a
    then, por eso veríamos 'Promise is resolved succesfully.
    
    De lo contrario, el message de reject pasa a catch, ya que no se cumplió la
    promesa.*/