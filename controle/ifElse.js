const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('Aprovado!')
    }else{
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!')
/*
Tomar cuidado com esse último caso, coomo js é uma linguagem de 
tipagem fraca, ele pode aceitar umas Strings
*/