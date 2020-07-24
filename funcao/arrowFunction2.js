function Pessoa() {
    this.idade = 0

    // Usando arrow aqui, pra ver o normal vá no arquivo thisEBind.js
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa