"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(categoria) {
        this.categoria = categoria;
    }
    mostrarCategoria() {
        console.log('categoria:  ', this.categoria);
    }
}
exports.Animal = Animal;
class Gato extends Animal {
    constructor(nome, idade) {
        super('mamifero');
        this.nome = nome;
        this.idade = idade;
    }
    mostrarDetalhes() {
        console.log('mostrar detalhe chamado');
    }
}
class Cachorro {
    constructor(categoria, nome, idade) {
        this.categoria = categoria;
        this.nome = nome;
        this.idade = idade;
    }
    mostrarDetalhes() {
        console.log(this.nome);
        console.log(this.categoria);
        console.log((this.idade) ? this.idade + 1 : '');
    }
}
const mingal = new Gato('mingal', 6);
console.log(mingal);
const toto = new Cachorro('mamifero', 'toto');
console.log(toto);
