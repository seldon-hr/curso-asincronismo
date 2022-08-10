/* 
    Función generator
    Nos va a permitir trabajar con ese iterador, para pausar cuando queramos
*/

function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

// Iterar arrays

function* iterate(array) {
    for (let value  of array) {
        yield value
    }
}

const it = iterate(['Omar', 'Juan', 'Alexander', 'Walter Benjamin', 'Demetrio de Falero']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
