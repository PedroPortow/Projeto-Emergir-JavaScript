//A propriedade prototype de uma função construtora armazena um objeto
//A partir do objeto criado pela função construtora, __proto__ consegue
//ter acesso a esse objeto armazenado dentro de prototype

function Animal(tipo){
    if(tipo)
     this.tipo = tipo

}


let dog = new Animal('mamífero')
let cat = new Animal('mamífero')
let snake = new Animal('réptil')
let peixe = new Animal()


Animal.prototype.obterTipo = function(){
    return this.tipo
}

Animal.prototype.tipo = 'desconhecido'

console.log(dog.__proto__)
console.log(dog)
console.log(peixe.obterTipo())
console.log(peixe)

// function Animal(tipo) {
//     if (tipo) this.tipo = tipo
// }
 
// Animal.prototype.obterTipo = function () {
//     return this.tipo
// }
 
// let sapo = {tipo: "anfibio"}
// console.log(Animal.prototype.obterTipo.call(sapo))