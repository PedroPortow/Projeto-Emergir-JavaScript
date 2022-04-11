//Challenge Bank Account

class Transferir{
    static execute(contaOrgigem, contaDestino, valor){
        if(!contaOrgigem instanceof ContaBancaria || 
            !contaDestino instanceof ContaBancaria){
                throw new Error('contas precisam herdar de conta bancaria')
            }
            try{
                contaOrgigem.sacar(vlaor)
                contaDestino.depositar(valor)
                

            } catch(e){
                console.log('deu ruim', e.message)
            }
    }

}

class Cliente{
    constructor(nome, documento, tipoDocumento){
        if(this.constructor === Cliente){
            throw new Error('cliente é uma clasre abstrata')
        }
        this.nome = nome
        this.documento = documento
        this.tipoDocumento = tipoDocumento
    }
}

class PessoaFisica extends Cliente{
    constructor(nome, documento){
        super(nome, documento, 'CPF')
        this.cpf = documento
    }
}

class PessoaJuridica extends Cliente{
    constructor(nome, documento){
        super(nome, documento, 'CNPJ')
        this.cnpj = documento
    }
}
class ContaBancaria{
    constructor(cliente, numero){
        if(this.constructor === ContaBancaria){
            throw new Error('ContaBancaria é uma classe abstrata')
        }

        this.cliente = cliente
        this.numero = numero
        this.saldo = 0

    }

    depositar(valor){
        this.saldo += valor
    }
    sacar(){
        throw new Error('metodo sacar() precisa ser implementado')
    }

    get dadosCliente(){
        return `${this.cliente.nome}, ${this.cliente.tipoDocumento}: ${this.cliente.documento}`
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(cliente, numero){
        super(cliente, numero)
        this.aniversario = Date.now()
    }

      
    sacar(valor){
        if(valor > this.saldo){
            throw new Error('saldo insuficiente')
        }
        this.saldo -= valor
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(cliente, numero){
        super(cliente, numero)
        this.limite = 0
    }
    
    sacar(valor){
        let disponivel = this.saldo + this.limite
        if(valor > disponivel){
            throw new Error('saldo insuficiente')
        }
        this.saldo -= valor
    }
}

const daniel = new Cliente('daniel', 1)
const maria = new Cliente('mariazinha', 2)


const cp1 = new ContaPoupanca(daniel, 1)
const cp2 = new ContaPoupanca(maria, 2)
const cc1 = new ContaCorrente(maria, 3)

cp1.depositar(1000)
cc1.limite = 1000
cc1.depositar(2000)
cc1.sacar(2000)

console.log(cp1.dadosCliente())