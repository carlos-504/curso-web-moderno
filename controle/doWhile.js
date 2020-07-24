function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
    /*
    O resultado gerado na constante valor retornará um número
    arredondado para baixo, por causa do return Math.floor()
    */ 
}

let opcao = -1

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log('Opção escolhida foi ' + opcao + '.')
} while(opcao != -1)
/*
O Do While é a única estrutura de controle que a condição vem depois
do bloco de códigos
*/

console.log('Até a próxima!')