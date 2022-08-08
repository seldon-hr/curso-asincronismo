/* Una promesa para validar que esta va a ser resuelta y posteriormente 
    el llamado de esta misma, y ver como se desenvuelve con await */

    const fnAsync = () => {
        return new Promise((resolve, reject) => {
            // Uso de if ternario
            (true)
                ? setTimeout(()=> resolve('Async!!'), 2000) // Si se cumple
                : reject(New Error('Error!')) //Fail
        });
    }