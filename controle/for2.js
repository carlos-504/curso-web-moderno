const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

/*
Se não quiser que a variável atributo não seja usado fora da estrutura
de controle, declare como let
*/
for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}