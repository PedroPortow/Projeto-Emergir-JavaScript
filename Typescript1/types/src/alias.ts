function add2(x: number, y?: number){
    if(y === undefined){
        return null
    }
    return x + y
}

const teste3 = add2(10)

type testeAlias = number | string | boolean //apelido pro tipo


let teste4: testeAlias
teste4 = '0'
teste4 = 10

let teste5: testeAlias
teste5 = 10

type User = {
    nome: string,
    idade: number | null 
}

const maria: User = {
    nome: 'maria',
    idade: 30
}

type Sizes = '12px' | '18px' | '24px'

const small: Sizes = '12px'
const normal: Sizes = '18px'


export default 1