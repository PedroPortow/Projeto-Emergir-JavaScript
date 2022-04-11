class Animal{
    constructor(tipo){

        if(this.constructor === Animal){
            throw new Error('Animal is an abstract class')
        }
        if(tipo){
            this.tipo = tipo
        }
    }

    comer(){
        throw new Error('method comer() tem q ser implementado')
    }
}

class Gato extends Animal{
    constructor(nome){
        super('mamifero')
        this.nome = nome
    }
    
    comer(){
        console.log(this.nome, 'está memendo')
    }
}

const animal = new Animal('mamifero')
const mingal = new Gato('mingal')