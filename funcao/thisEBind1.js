const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        /* Imprimindo o atributo do objeto pessoa, porém não é 
        necessário usar o nome objeto nesse caso, pode usar o this
        se tiver dentro do bloco*/
        console.log(this.saudacao)
    }
}
// Chamando a função falar do objeto pessoa
pessoa.falar()

//Armazenando a função falar dentro de uma variável (é safe)
const falar = pessoa.falar

//Chamando a função falar, depois de fazer esse rolê na linha 14
falar() // Conflito entre paradigmas: funcional e OO

/* bind é o método responsável por amarrar um determinado objeto para
ele ser o dono da execução naquele método sempre que ele for chamado.
RESUMINDO: Se quiser chamar um atributo que ta atribuído a uma função
dentro de um objeto, usa o bind, vai dar bom, igual o ex abaixo*/
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()