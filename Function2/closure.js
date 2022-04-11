const teste = (function(){
    let n = 5
    return function testeInterno(){
        console.log('testeinterno called', n)
        return 'retorno de teste interno' + n
    }
})()

console.log(teste)
console.log('-----------')
console.log(teste())
let str = teste()
console.log(str)