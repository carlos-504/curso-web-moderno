// Objeto é uma coleção dinâmica de pares chave/valor
// O operador 'new' cria objetos
// Criando objeto com atributos de forma dinâmica
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

// Excluindo atributos através do delete
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo : 'A4',
    valor: 89000,
    proprietario : {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    },{
        nome: 'Ana',
        idade: 42
    }],
    calculaValorSegura: function() {
        // ..
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

//delete carro.condutores
delete carro.calculaValorSegura
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)