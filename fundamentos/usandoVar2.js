/*
A variável var só tem dois escopos, ou seja, tem um limite de
visibilidade 
*/

var numero = 1
{
    var numero = 2
    console.log('fora =', numero)
}
console.log('fora =', numero)