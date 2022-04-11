//ES6

class AnimalC{
    constructor(tipo){
        if(tipo){
            this.tipo = tipo
        }
    }

    obterTipo(){
        return this.tipo
    }
}

class GatoC extends AnimalC {
    constructor(nome){
        super('mamífero')
        this.nome = nome
        this.miar = function(){
            console.log(this.nome, 'está a miar')
        }
    }
}

class Cachorro extends AnimalC {
    constructor(nome){
        super('mamífero')
        this.nome = nome
    }
}

AnimalC.prototype.tipo = 'desconhecidooo'
Cachorro.prototype.latir = function(){
    console.log(this.nome, 'está latindo')
}

let sapo = new AnimalC()
let animal = new AnimalC('Anfíbio')
let mingal = new GatoC('mingal')
let roger = new Cachorro('Roger')

console.log(roger.latir())
///////////////////////////////////////////////////////////////////////////