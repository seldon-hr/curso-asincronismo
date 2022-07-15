const promise = new Promise(function (resolve, reject) {
    resolve('hey!')
});

const cows = 7;

const countCows = new Promise (function(resolve, reject) {
    if(cows > 10) {
        resolve(`We have ${cows} on the farm`);
    } else {
        reject('There is not enought cows');
    }
});

countCows.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Finally'))