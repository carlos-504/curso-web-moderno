const primerioElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primerioElemento)
    .then(primerioElemento)
    .then(letraMinuscula)
    .then(console.log)