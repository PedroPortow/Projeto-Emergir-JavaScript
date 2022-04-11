const NOME = Symbol()

let n = 0
const user = {
    ['TESTE ' + (++n)]: 'teste' + n,
    ['TESTE ' + (++n)]: 'teste' + n,
    ['TESTE ' + (++n)]: 'teste' + n,
    [NOME]: 'daniel',
    'nome': 'daniel 2,'
}

console.log(user)