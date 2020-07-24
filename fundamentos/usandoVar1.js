/*
Variavéis declaradas dentro de blocos, podem ser chamadas fora das
mesmas
*/
{ 
    { 
        { 
            { 
                var sera = 'Será???'
                console.log(sera)
            } 
        } 
    } 
}

console.log(sera)

/*
Variavéis dentro da função não podem ser chamadas fora delas Exemplo:
*/
function teste() {
    var local = 123
}

teste()
//console.log(local)