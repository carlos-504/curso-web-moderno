const pai = { nome: 'Pedro', corCabelo: 'preto' }

// Aqui o objeto pai está sendo protótipo do filha1 através do Object.create() 
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

// Imprimindo os atributos de filha2 junto com o protótipo,
// mas sem os valores 
for(let key in filha2){
    console.log(key)
}
// Mostrando o que é do objeto e o que vem por herança
for(let key in filha2){
    filha2.hasOwnProperty(key) ? 
        console.log(`Do objeto: ${key}`) : console.log(`Por herança: ${key}`)
}