export abstract class Animal { 
    constructor(protected readonly categoria: string){}

    mostrarCategoria(): void{
        console.log('categoria:  ', this.categoria)
    }

    abstract mostrarDetalhes(): void //obrigatorio classe q herda tem q implementar esse metodo
}

interface AnimalInterface {
    categoria: string;
    mostrarDetalhes(): void;
    idade?: number;
    latir?(): void
}

const laica: AnimalInterface = {
    categoria: 'mami',
    mostrarDetalhes(){
        console.log('')
    },
    idade: 2,
    latir(){
        console.log('auauauauauau')
    }
}

console.log(laica)

class Gato extends Animal{
    constructor(public nome: string, public idade: number){
        super('mamifero')
    }

    mostrarDetalhes(){
        console.log('mostrar detalhe chamado')
    }
}

interface CachorroInterface {
    latir(): void
}

class Cachorro implements AnimalInterface, CachorroInterface{
    constructor(public categoria: string, public readonly nome: string, public idade?: number){

    }

    mostrarDetalhes(): void {
        console.log(this.nome)
        console.log(this.categoria)
        console.log((this.idade) ? this.idade + 1 : '')        
    }

    latir(){
        console.log(this.nome, 'está latindo ')
    }


}

const mingal = new Gato('mingal', 6)
console.log(mingal)
const toto = new Cachorro('mamifero', 'toto', 5)
console.log(toto)
toto.latir()

