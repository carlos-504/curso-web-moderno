const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

// Função writeFile cria um novo arquivo
// Função stringify transforma o objeto literal num JSON
// CallBack retorna mensagem de erro ou de sucesso 
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})