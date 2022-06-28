function makingOrder(orden) {
    console.log(`Ready  ${orden}`);
}


function order(orden, callback) {
    console.log(`Taking order ${orden}`);
    setTimeout(() => {
        callback(orden)
    }, 3000)
    console.log(`Doing order ${orden}`,);
}

order('Burger', makingOrder);

// Un ejercicio de callback, where you make an order and this enter to the kitchen and later it is ready,