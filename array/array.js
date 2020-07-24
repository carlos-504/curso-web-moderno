// O array é um tipo especial de Objeto, uma estrutura indexada (a partir do 0)
console.log(typeof Array, typeof new Array, typeof [])

// Jeitos de se criar um Array
// 1 - Através do operador new
let aprovados = new Array('Bia','Carlos','Ana')
console.log(aprovados)

// 2 - Método notação literal
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // Como o índice 3 não existe, ele retorna undefined

//Adicionando elemento
// 1º método (Mais usado para substituir o valor do índice)
aprovados[3] = 'Paulo'

// 2º método (Mais usual)
aprovados.push('Abia')
console.log(aprovados.length)

// É possível adicionar um elemento em qualquer índice
aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // Essa função ordena o array
console.log(aprovados)

// Deletando o value de um índice
delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

// Deletando através da função splice
// OBS: a função splice tbm serve para adicionar elementos
// splice(IndíceQueVcQuerTrabalhar, QntDeElementosQueVcQuerDeletar,AddElementos)
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(0,1)
console.log(aprovados)