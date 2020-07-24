// Configurando o Express(servidor web)
// Definido uma porta
const porta = 3003

// Importando o express
const express = require('express')
// Atribuindo o express a uma constante 
const app = express()
// Importarndo o body-parser
const bodyParser = require('body-parser')
// Importando o arquivo bancoDeDados 
const bancoDeDados = require('./bancoDeDados')

// urlenconded é uma função middleware 
// tranforma o corpo da requisição no objeto
// sem o body-parser o projeto abaixo não funciona
app.use(bodyParser.urlencoded({ extended: true }))

// Get é uma forma de requisição, '/produtos' é a url definina
// A resposta é a função middleware
// Parametros passados na middleware.callback(requisição, resposta, next)
// O método send() vai converter para JSON
app.get('/produtos', (req, res, next) => {
    // Colocando o getProdutos() como resposta, para obter a lista de produtos
    res.send(bancoDeDados.getProdutos())
})

// Esse método vai retornar apenas um produto baseada na id
app.get('/produtos/:id', (req, res, next) => {
    // getProduto tem como parametros a requisição(req) e os parametros(params)
    // que na url é o :id
    res.send(bancoDeDados.getProduto(req.params.id))
})

// Salvando o produto no bd em memória
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    // Resposta que veio da função bancoDeDados
    res.send(produto) // Vai converter o objero para um JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    // Resposta que veio da função bancoDeDados
    res.send(produto) // Vai converter o objero para um JSON
})

// Método que excluir um produto
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) 
})

// Meteu o listen aqui para dizer qual porta ele está escutando
// callback é pra mostrar que ele conseguiu startar a aplicação
app.listen(porta, () => {
    console.log(`Servidor sendo executado na posta ${porta}.`)
})