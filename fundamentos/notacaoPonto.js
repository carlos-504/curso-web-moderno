//O objeto Math.ceil sempre arredonda pro mais alto
console.log(Math.ceil(6.1))

/*
Criando atributo de forma dinâmica para um objeto. Não necessariamente 
ele precisa ser declarado dentro do objeto, o método abaixo 
mostra outra forma
*/
const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2' (Tmb é possível criar desse jeito)
console.log(obj1.nome) //imprimindo só o atributo nome do objeto

function Obj(nome){
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()