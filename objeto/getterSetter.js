//get e set são funções

const sequencia = {
    _valor: 1, // convenção (o underline ñ significa que o atributo é privado)
    get valor() { return this._valor++ },
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}
// Acessando os métodos get e set
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)
// Ele não imprimiu 901 pq o método set não permite um número menor que
// 1000, que foi atribuído na linha 14