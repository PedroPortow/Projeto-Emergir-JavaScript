class Contador{
    constructor(){
        this._symbol = Symbol()
        this.contador = 0
        this[this._symbol] = 0
    }

    increment(){
        this.contador++
        this[this._symbol] = this[this._symbol] + 1
        
        console.log(this.contador)
    }
}

let c1 = new Contador()
c1.increment()
console.log(c1.contador)
console.log(c1)