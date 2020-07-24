// Melhorias na notação literal de um Objeto (Jeito padrão de criar obj) 
const a = 1
const b = 2
const c = 3

// Antes eu tinha que fazer essa duplicidade, mesmo com as variáveis
// declaradas como na linha acima
const obj1 = {a: a, b: b, c: c}
// Agora não é mais necessário, pq o atributos puxam os valores
// atribuídos nas constantes 
const obj2 = {a, b, c}
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

// Outras formas de colocar atributos nas funções
const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

// Como definir funções dentro de um objeto literal
const obj5 = {
    //Forma antiga
    funcao1: function(){

    },
    //Forma nova
    funcao2(){

    }
}

console.log(obj5)