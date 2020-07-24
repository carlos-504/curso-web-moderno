function criarProduto(nome, preco){
    return {
        // Não é necessário atribuir nada para o nome e preço, pq já
        // estão como parametros, mas se quiser pode atribuir tbm
        nome,
        preco,
        desconto: 0.1
    }
}

// Aí vc pode dar valor aos atributos do objeto pelos parametros
console.log(criarProduto('Biscoito',21.6))
console.log(criarProduto('Bolacha',27.9))