// O node faz cache daquilo que é retornado a partir do require
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

// Quando é retornado uma função factory, vc dribla o cache
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor, contadorA.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor, contadorC.valor)