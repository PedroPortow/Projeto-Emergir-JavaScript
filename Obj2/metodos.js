const pai = {
    nome: 'pai',
    falar: function(msg){
        console.log(this.nome, 'está falando')
    }
}

const filho = Object.create(pai, {nome: {value: 'junin', enumerable: 'true'}})

console.log(filho.__proto__)
console.log(filho.falar())

const obj1 = {
    a: 'a',
    b: 'b',
    c: 'c'
}

const obj2 = {
    b: 'b2',
    d: 'd2'
}

const filha = Object.assign(obj1, filho)
// console.log(filha.falar()) ----> n vai funcionar pq o assign só funciona com as propriedades enumeradas
obj1.d = "d"

const clone = Object.assign({}, obj1, obj2)

console.log(Object.keys(obj2))
console.log(Object.values(obj2))
console.log(Object.entries(obj2))


