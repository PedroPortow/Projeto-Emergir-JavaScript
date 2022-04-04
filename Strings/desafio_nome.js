// function formatarNome(nomeCompleto){
//     nomeCompleto = nomeCompleto.trim()
//     let firstSpace = nomeCompleto.indexOf(' ')
//     if(firstSpace < 0)
//         return nomeCompleto

//     let primeiroNome = nomeCompleto.slice(0, firstSpace)
//     let sobrenome = nomeCompleto.slice(firstSpace + 1)
//     return sobrenome + ', ' + primeiroNome

// }

// console.log(formatarNome('Pedro'))
// console.log(formatarNome('Pedro Luís'))
// console.log(formatarNome('Pedro Luís Porto'))


function nameSplit(nomeCompleto){
    let newName = nomeCompleto.split(' ')
    console.log(newName)

    return newName[1] + ' ' + newName[2] + ', ' + newName[0]
}

console.log(nameSplit('Pedro PORPAOR RPOR'))