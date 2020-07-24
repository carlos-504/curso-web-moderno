//Criando a array
const valores = [7.7, 8.9, 6.3, 9.2]

//Imprimido os índices do Array
console.log(valores[0] , valores[3])

//Imprimindo um índice não existente
console.log(valores[4])

//Criando um novo índice na array e atribuindo um valor
valores[4] = 10
console.log(valores)

//Mostrando o quantidade de elementos que tem no array com o length
console.log(valores.length)

//Adicionando elementos na Array com o push
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

//Removendo o último elemento da Array com pop
console.log(valores.pop())

//Removendo qualquer elemento com delete
delete valores[0]
console.log(valores)

//Vendo o tipo da Array
console.log(typeof valores)