// let arr = [1,2,3]
// let arr1 = [5,6,7]

// // console.log(arr1.toString())

// // console.log(arr1.join(' - '))

// let teste = arr.push(11,13)

// console.log(arr)
// console.log(teste)

const numeros = [1,3,4,1,4,5,3,5,8,9]
// const numerosUnicos = [1,3,4,5,8,9]

const numerosUnicos = numeros.reduce(function(numerosUnicos,numeroAtual){
    if(numerosUnicos.indexOf(numeroAtual) < 0){
        numerosUnicos.push(numeroAtual)
    }
    return numerosUnicos
},[])

console.log(numerosUnicos)