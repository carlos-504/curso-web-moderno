/*
A variável let tem um aspecto mais global, ele verifica seu escopo
primeiro, para depois bucar em outro
*/

let numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)