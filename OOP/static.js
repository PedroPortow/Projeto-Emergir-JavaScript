//3S5
function Animal(){}

Animal.prototype.whoAmI = function(){
    return this
}

Animal.categoria = 'ser vivo'

const dog = new Animal()
 

//ES6
class Cachorro{
    constructor(nome){
        this.nome = nome
    }

    static comer(){
        console.log('memendo n')
        this.beber()
    }

    static beber(){
        console.log('bebendo')
    }
}

const dog2 = new Cachorro('rexx')
console.log(dog2)