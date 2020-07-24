const imprimirResultado = function (nota){
    switch (Math.floor(nota)){
        // Uma case pode estar dentro de outra
        case 10:
        case 9:
            console.log('Quadro de Honra')
        break
        case 8: case 7: //Pode ser naa mesma linha também
            console.log('Aprovado')
        break
        case 6: case 5: case 4:
            console.log('Recuperação')
        break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
        break
        default: //O default seria um ELSE final, ou seja, ñ obrigatório
            console.log('Nota Inválida')
    }
}

imprimirResultado(10)
//imprimirResultado(8.9)
//imprimirResultado(6.55)
//imprimirResultado(3)
//imprimirResultado(-1)
//imprimirResultado(11)