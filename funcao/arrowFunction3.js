let comparaComThis = function (param){
    console.log(this === param)
}

comparaComThis(global)

// Criando objeto
const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

// Agora é com Arrow
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)