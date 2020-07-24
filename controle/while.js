function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor )
    /*
    O resultado gerado na constante valor retornará um número
    arredondado para baixo, por causa do return Math.floor()
    */ 
}

let opcao = 0 //Iniciando uma variável

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log('Opção escolhida foi ' + opcao + '.')
}

console.log('Até a próxima')