// Map tem uma pegada de objeto, ele é um estrutura dinâmica
// Instanciando o Map a uma constante 
const tecnologias = new Map()

// chave 'react' valor 'framework: false'
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react) // maneira errada
console.log(tecnologias.get('react').framework) // maneira correta de chamar

// Outraa maneira de ser criar um Map
const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

// Aplicando o forEach e chamando uma callBack(valor, chave)
chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

// verificando se a chave 123 existe no map
console.log(chavesVariadas.has(123))
// deletando aa chave 123
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
// verificando a quantidade de elementos
console.log(chavesVariadas.size)

// Criando elementos no map
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)