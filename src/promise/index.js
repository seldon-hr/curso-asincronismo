const promise = new Promise(function (resolve, reject) {
    resolve('hey!')
});


// Una promesa que se basa en el número de vacas, y si tenemos un número podemos proceder.
const cows = 15;

const countCows = new Promise (function(resolve, reject) {
    if(cows > 10) {
        resolve(`We have ${cows} on the farm`);
    } else {
        reject('There is not enought cows');
    }
});


//Ejecución de la función.
countCows.then((result) => {  //Uso de 'then' con el cual se ejecuta la promesa. then para pedir
    console.log(result)
}).catch((error) => { // 'catch' para indicar que no se ha cumplido la promesa
    console.log(error);
}).finally(() => console.log('Finally')) //'finally' es opcional pero es para poder añadir un mensaje que ya termino la promesa whaterever the result.