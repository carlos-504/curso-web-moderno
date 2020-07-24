function Carro(velicidadeMaxima = 200, delta = 5){
    // atributo privado
    let velocidadeAtual = 0
    
    // metodo publico
    this.acelerar = function(){
        if (velocidadeAtual + delta <= velicidadeMaxima){
            velocidadeAtual += delta
        }else{
            velicidadeAtual = velicidadeMaxima 
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)