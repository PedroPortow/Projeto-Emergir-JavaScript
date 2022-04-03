const arr = [1,5,10, 'ola', true]
let arr1 = [1,5,10]

// let soNums = arr.every(function(el){
//     console.log(el)
//     return true
// })

// arr.filter(function(el, i, _arr){
//     console.log(_arr)
// })

// arr.forEach(function(el, i, _arr){
//     console.log(el, i)
// })

arr1 = arr1.map(function(el, i, _arr){
    return el * el
})

console.log(arr1)
