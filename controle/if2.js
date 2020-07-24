function teste1(num){
    if(num > 7)
        console.log(num)
    
    // Não precisa usar chave se a estrutura estiver identada    
    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num){
    if(num > 7); { //cuidado com o ';', não usarcom estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)