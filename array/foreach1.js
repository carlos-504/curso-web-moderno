const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// Usando Função CallBack
aprovados.forEach(function(elemento, indice){
    indice++
    console.log(indice + ") " + elemento)
})

// Usando Arrow Function
aprovados.forEach(elemento => console.log(elemento))

// Função Arrow atribuída a uma constante
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados) // Constante passada como parametro