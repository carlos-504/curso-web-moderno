/*
Um sinal de = é apenas simbolo de atribuição. Dois sinais de == 
é um operador relacional que compara a igualdade entre duas coisas,
desconsiderando o tipo da variável.
*/
console.log('01)', '1' == 1)

/*
Quando é usado a atribuição de 3 sinais de igual, ele comapara o tipo
e o valor da variável, ou seja, os valores comparados tem que ser
exatamente iguais em relação a valor e tipo da variável
*/
console.log('02)', '1' === 1)

/*
Acontece as mesma coisa com a atribuição de diferente (!=). Existe
o diferente (!=) e o estritamente diferente (!==).
*/
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

//Atribuições simples
console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
/*
Nesse exemplo de baixo funfou pq ele foi usado o getTime que puxa o 
dia e tempo exato do lançamento do js
*/
console.log('11)', d1.getTime() === d2.getTime())
console.log('12)', undefined == null)
console.log('13)', undefined === null)
// Conclusão: Sempre optar pelo estritamente igual