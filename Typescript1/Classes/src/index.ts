console.log('______________________________________________________')

// class Animal {
//     categoria: string
//     constructor(categoria: string){
//         this.categoria = categoria
//     }
// }


//mais curtaa
abstract class Animal { 
    constructor(protected readonly categoria: string){}

    mostrarCategoria(): void{
        console.log('categoria:  ', this.categoria)
    }
}



class Gato extends Animal{
    private nome: string
    constructor(nome: string){
        super('cat')
        this.nome = nome

    }

    mostrarDetalhes():void{
        console.log(this.nome, this.categoria)
    }
}




class Cachorro extends Animal{
    constructor(private _nome: string){
        super('mamifero dog')
    }

    get nome(){
        console.log('get chamado')
        return this._nome
    }
    
    set nome(n:string){
        console.log('set chamado')
        this._nome = n
    }

    mostrarDetalhe(): void{
        console.log(this._nome + 'é um ' + this.categoria)
    }
}

const toto = new Cachorro('toto')
const mingal = new Gato('mingalzinho')

// console.log(toto.nome)
// toto.nome = "novo nome de toto"
// toto.mostrarDetalhe()
// toto.mostrarCategoria()


class Cliente{
    private readonly _listaAnimais: Animal[] = []
    private _tempListaAnimais: Animal[] = []

    adicionarAnimais(...animais: Animal[]): void{
        this._listaAnimais.push(...animais)

        this._tempListaAnimais.length = 0
        this._tempListaAnimais = [...this._listaAnimais]
    }

    get listaAnimais(){
        return [...this._listaAnimais]
    }
}

const daniel = new Cliente()
// daniel.adicionarAnimais(toto, mingal)
// daniel.listaAnimais.length = 0
// console.log(daniel)

