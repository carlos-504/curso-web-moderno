function Pessoa() {
    // Criando um atributo a partir do this
    this.idade = 0
    
    /* Dispara uma outra função a partir de um determinado intervalo
    que você passou */
    // Aqui vamos passar uma função como paramêtro
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) // esse 1000 é o tempo que essa função vai ficar disparando
}

/* Para fazer tudo isso funcionar, vamos estanciar a função Pessoa, para
criar um objeto */

new Pessoa