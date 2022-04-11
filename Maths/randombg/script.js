function randomNum(inicio = 5, fim = 10, integer = true){
    let random = Math.random() * (fim - inicio + 1) + inicio

    return integer ? parseInt(random) : random
    
}

let n = randomNum(1, 5)
document.body.style.backgroundImage = `url(images/${n}.jpg`