// o for in intera em cima de índices
// o for of intera em cima de valores
for (let letra of "Cod3r") {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

// percorrendo apenas os índices
for (let i in assuntosEcma){
    console.log(i)
}

// percorrendo apenas os valores
for(let valores of assuntosEcma){
    console.log(valores)
}

// criando um Map
const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

// chamando as chaves e os valores do map
for(let assunto of assuntosMap){
    console.log(assunto)
}

// imprimindo apenas as chaves do map
for(let chave of assuntosMap.keys()){
    console.log(chave)
}

// imprimindo apenas os values do map
for(let valor of assuntosMap.values()){
    console.log(valor)
}

// desestruturando o map
for (let [ch, vl] of assuntosMap.entries()){
    console.log(ch, vl)
}

// percorrendo um set
const s  = new Set(['a', 'b', 'c'])
for(let letra of s){
    console.log(letra)
}