'use strict'

const pessoa = {
    nome: 'daniel'
}

Object.defineProperty(pessoa, 'sobrenome', {
    value: 'Tapias Morales',
    enumerable: true,
    configurable: true,
    writable: true,
})

Object.defineProperties(pessoa, {
    prop1: {
        value: 'prop 1'
    },
    prop2:{
        writable: false,
        value: 10
    }
})

console.log(Object.getOwnPropertyDescriptor(pessoa, 'nome'))

delete pessoa.sobrenome
for(let i in pessoa){
    console.log(i)
}
