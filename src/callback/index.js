function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2); //Este nombre callback es un nombre que se da, puede tner otro nombre.
}

console.log(calc(2, 2, sum));

setTimeout(function () {
    console.log('Hey, JS');
}, 3000)

function gretting(name) {
    console.log(`Hola ${name}`)
}

setTimeout(gretting, 2000, 'Ashoka');