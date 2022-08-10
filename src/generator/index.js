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
