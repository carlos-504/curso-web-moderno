const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços

// Transformando o JSON num objeto
const paraObjeto = json => JSON.parse(json)
// Criando produto que busca apenas o value dos preços
const apenasPreco = produto => produto.preco

// Passando tudo como parametro para o Map
const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)