function add2(x: number, y?: number){
    if(y === undefined){
        return null
    }
    return x + y
}

const teste3 = add2(10)


let teste4: number | string
teste4 = '0'
teste4 = 10

const User: {
    nome: string,
    idade: number | null
} = {
    nome: 'daniel',
    idade: 10
}