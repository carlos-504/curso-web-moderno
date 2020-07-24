// Objeto que representa a sequência dos ids que são persistidos
const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

// Objeto que vai ter a coleção de ids
const produtos = {}

//Create produto
function salvarProduto(produto) {
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

// Função que pega o produto pelo id (Update)
function getProduto(id){
    return produtos[id] || {}
}

// Função que retorna os values dos produtos
function getProdutos() {
    return Object.values(produtos)
}

// Função que exclui um produto
function excluirProduto(id){
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto }