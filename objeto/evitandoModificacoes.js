// Object.preventExtensions
// (Não deixa adicionar mais atributos, porém pode deletar)
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extesível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal
// (Não deixa adicionar o deletar atributos, porém pode pode mudar os
//  valores)
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + valores imutáveis