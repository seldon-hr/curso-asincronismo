const message = function () {
    console.log(`A callback function is when the function is within params about other function`);
}

setTimeout(message, 5000);

// This function evolves

setTimeout( function () {
    console.log(`The same functions but in a anonymus function`)
}, 2000);

//Improve using arrow function

setTimeout(() => {
    console.log(`Optimized function`);
}, 2000);