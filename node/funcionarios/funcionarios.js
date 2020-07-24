const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// Desafio: obter mulher chinesa com menor salário
// Filtrando o país e o genero com uma função arrow
// Dps trazendo a que tem o menor salário para colocar no reduce
const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)
    
    // Imprimindo mulher chinesa com o menor salário
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})