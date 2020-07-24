// Cadeia de protótipos (prototype chain)
// Object.prototype é um  objeto
// O __proto__: faz o rolê de herança como no exemplo abaixo
// Aqui nesse caso o filho tá herdando o attr0 do avó, mesmo ele não
// estando declarado dentro do objeto, pois quando não possui um __proto__
// o prototype do objeto aponta para o Object.prototype
Object.prototype.attr0 = '0' // não recomendado
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: '3'}
const filho = {__proto__: pai, attr3: 'C'}
// Mesmo o pai tendo o attr3, ele busca o mais próximo
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}
// Fazendo a relação de herança com Object.setPrototypeOf()
// Primeiro vem o objeto depois o protótipo
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())