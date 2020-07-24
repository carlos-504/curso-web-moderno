const escola = "Cod3r"

//O charAt pega o índice que vc denominar no parametro
console.log(escola.charAt(4))

//O indexOf mostra o índice do número colocado do parametro
console.log(escola.indexOf('3'))

/*
O substring pega o valor do índice colocado no parametro até o
final do valor da variável. Exemplo: 
*/
console.log(escola.substring(1))

/*
Tmb é possível usar intervalos nos parametros, para selecionar 
apenas partes da variável (Mas ele não pegar o valor final do
índice colocado no parametro). Exemplo: 
*/
console.log(escola.substring(0, 3))

//Concatenando com concat(). O sinal de + tmb pode ser usado
console.log('Escola '.concat(escola).concat("!"))

/*
Trocando uma letra ou numero colocado no parametro por 
outra numero ou letra usando o 'replace'
*/
console.log(escola.replace('3', 'e'))

//Transformando uma String num Array com 'split'
console.log('Ana,Maria,Pedro'.split(','))