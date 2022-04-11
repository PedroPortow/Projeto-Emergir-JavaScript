const obj = {
    prop1: 'prop 1',
    prop2: 'prop 2',
}

const objFreeze = {...obj}
const objSeal = {...obj}
const objPrevent = {...obj}

Object.freeze(objFreeze) //n pode remover nem atualizar nem nada nas props
Object.seal(objSeal) //só atualizar
Object.preventExtensions(objPrevent) //só não deixa criar