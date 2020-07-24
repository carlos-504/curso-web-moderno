// IIFE -> Immediately Invoked Function Expression
// Padrão muito usado para fugir do escopo global
(function(){
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente')
})
// chamando a função criada acima 
()