// Arrays atríbuidos a constantes não podem ter elementos adicionaos diretamente
// Mas o conteúdo o array ainda é pode ser alterado 
const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Retira o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona o elemento no final da Array
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento da Array
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciono no primero índice do Array
console.log(pilotos)

// Função splice pode adicionar e remover elementos
// Adicionar
// Elementos adicionados a partir do índice 2, o segundo parametro é zero, pois não
// queremos deletar nenhum elemento
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// Remover
pilotos.splice(3,1) // Ecluíndo a partir do 3º índice, porém apenas 1 elemento
console.log(pilotos)

// Função slice gera um novo array, a partir de um array já existente
// Novo array gerado a partir do índice passado como parametro
const algunsPilotos1 = pilotos.slice(2) 
console.log(algunsPilotos1)

// Array gerado a partir do índice 1, até o índice 3
// (1 índice anterior do que foi passado como parametro)
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)