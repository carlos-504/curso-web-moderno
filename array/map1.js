const nums = [1, 2, 3, 4, 5]

// For com prósito (map)
// Atribuindo o novo array em uma variável
let resultado = nums.map(function(e) {
    return e * 2
})

// Novo array gerado
console.log(resultado)

// Criando três funções arrow e atribuíndo as seguintes constantes
const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

// Gerando um novo array atribuíndo o array original junto com as funções na
// variável
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)