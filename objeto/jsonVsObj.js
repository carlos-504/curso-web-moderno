//JSON (JavaScript Object Notation) é um formato textual
//JSON não é um Objeto
const obj = { a: 1, b: 2, c: 3, soma(){ return a + b + c }}
console.log(JSON.stringify(obj)) //JSON não aceita funções

// O uso de chaves é uma notação JSON, parecida com a de objeto
// Atributos tem que estar delimitados em aspas duplas

/* console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")) Formato inválido
O atributo(chave) não está entre aspas duplas
*/

/* console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")) Formato inválido tbm
Deu erro tbm, pois todo atributo no JSON tem que ser delimitado por aspas duplas
*/

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // Formato válido
// Exemplo de objeto gerado atráves de um texto, respeitando o fotmato JSON

console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }'))
// Mostando outras formas de values (strings delimitadas por aspas duplas)