let telefone1 = "91234-2345"
let telefone2 = '1234-2345'

function maskPhone(numero){
    let hifemPos = numero.indexOf('-')
    let numeroInicio = numero.slice(0, hifemPos)
    let numeroFinal = numero.slice(hifemPos + 1)
    console.log(numeroInicio, numeroFinal)
    let doisUltNum = numeroFinal.slice(-2)
    return `${numeroInicio[0].padEnd(numeroInicio.length, '*')}-${doisUltNum.padStart(numeroFinal.length, '*')} `
}

maskPhone(telefone1, telefone2)