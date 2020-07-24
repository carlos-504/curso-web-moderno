// Factory Simples
// Factory é uma função que no final ela retorna um objeto, tem objetivo
// de fabricar uma instância de um objeto
function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())