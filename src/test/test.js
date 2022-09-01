//Case 1
const objeto = {
    'name': 'Dan',
    number: 4,
}

console.log(obj.number);


//Case 2
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true

/* 
La diferencia entre ambos casos, es que dentro de nuestro segundo objeto tenemos un string, y lo qu hace 
'JSON.parse(json)' es convertir ese string a un objeto iterable, ya que este llega como string y lo
necesitamos como objeto.
*/