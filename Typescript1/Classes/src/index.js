"use strict";
console.log('______________________________________________________');
// class Animal {
//     categoria: string
//     constructor(categoria: string){
//         this.categoria = categoria
//     }
// }
//mais curtaa
class Animal {
    constructor(categoria) {
        this.categoria = categoria;
    }
    mostrarCategoria() {
        console.log('categoria:  ', this.categoria);
    }
}
class Gato extends Animal {
    constructor(nome) {
        super('cat');
        this.nome = nome;
    }
    mostrarDetalhes() {
        console.log(this.nome, this.categoria);
    }
}
class Cachorro extends Animal {
    constructor(_nome) {
        super('mamifero dog');
        this._nome = _nome;
    }
    get nome() {
        console.log('get chamado');
        return this._nome;
    }
    set nome(n) {
        console.log('set chamado');
        this._nome = n;
    }
    mostrarDetalhe() {
        console.log(this._nome + 'é um ' + this.categoria);
    }
}
const toto = new Cachorro('toto');
const mingal = new Gato('mingalzinho');
// console.log(toto.nome)
// toto.nome = "novo nome de toto"
// toto.mostrarDetalhe()
// toto.mostrarCategoria()
class Cliente {
    constructor() {
        this._listaAnimais = [];
        this._tempListaAnimais = [];
    }
    adicionarAnimais(...animais) {
        this._listaAnimais.push(...animais);
        this._tempListaAnimais.length = 0;
        this._tempListaAnimais = [...this._listaAnimais];
    }
    get listaAnimais() {
        return [...this._listaAnimais];
    }
}
const daniel = new Cliente();
// daniel.adicionarAnimais(toto, mingal)
// daniel.listaAnimais.length = 0
// console.log(daniel)
