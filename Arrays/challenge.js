function sum(){
    const numbers = Array.from(arguments)
    return numbers.reduce(function(sum, atual){
        return sum + atual
    }, 0)
}
function media(){
    return sum(...arguments) / arguments.length
}
let soma = sum(12,2,3,4,5)
let mediaReal = average(1,2,4,5,6)

console.log(soma)
console.log(mediaReal)