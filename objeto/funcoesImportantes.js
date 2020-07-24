const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

// Função que retorna os atributos
console.log(Object.keys(pessoa))
// Função que retorna os valores dos atributos
console.log(Object.values(pessoa))
// Função que retorna uma array, com subArrays, que contém o atributo e
// o valor dela (value)
console.log(Object.entries(pessoa))

// Percorrendo a Array da função Object.entries
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

// Função que cria um atributo/variável criando umas restrições
// (nomeDoObjeto, nomeDoAtributo, objetoComEspecificaçõesDoAtr)
Object.defineProperty(pessoa, 'dataNascimento', {
    //enumerable = lista-lo
    enumerable: true,
    //writable = poder altera-lo
    writable: false,
    //valor do atributo
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
// Ele junta os atributos dos objetos passados como parametro
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)

// Congelando o Objeto 'obj'
Object.freeze(obj)
obj.c = 1234
console.log(obj)