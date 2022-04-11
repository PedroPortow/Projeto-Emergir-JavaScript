function randomNum(inicio = 5, fim = 10, integer = true){
    let random = Math.random() * (fim - inicio + 1) + inicio

    return integer ? parseInt(random) : random
    
}

console.log(randomNum(2, 2, false))