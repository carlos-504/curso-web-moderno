const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return false
}))

// Chamando apenas os produtos com o preço > 500 e que seja produto frágil
// Atribuindo as funções numa constante
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

// Chamando as fuções no parâmetro do filter
console.log(produtos.filter(caro).filter(fragil))

/* Jeito que eu fiz
console.log(produtos.filter(p => p.preco >= 500).filter(p => p.fragil == true))
*/