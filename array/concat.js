const filhas = ['Ualeska', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
const todos = filhas.concat(filhos)
// const todos = [].concat(filhas, filhos) Também funciona
console.log(todos, filhas, filhos)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))