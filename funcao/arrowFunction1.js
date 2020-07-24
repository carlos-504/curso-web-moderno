// Jeito padrão de se criar uma função (anonima)
let dobro = function (a) {
    return 2 * a
}

// Jeito Arrow de se criar uma função (mais reduzida)
/* A função Arrow é sempre uma função anônima, ou seja, se quiser 
chamar ela tem que armazenar dentro de uma variável */ 
// Sumiu a palavra function e foi adicionado a seta
dobro = (a) => {
    return 2 * a
}

// Mais reduzida ainda
// Quando tem apenas um parametro não precisa do parenteses
dobro = a => 2 * a // O return está implícito (pq é uma função de uma única linha)
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá'// esse underline significa que possui 1 parametro
console.log(ola())