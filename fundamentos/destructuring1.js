// Novo recurso do ES2015

// Criando um objeto
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
//Desestruturando objeto
/*
Tirando de dentro do objeto atributo nome e idade (usando o operador
destructuring)
*/
const { nome, idade } = pessoa
console.log(nome, idade)

/*
Mudando as variáveis com destructuring
*/
const { nome: n, idade: i } = pessoa
console.log(n, i)

//Testando atributos não declarados dentro do objeto
const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)