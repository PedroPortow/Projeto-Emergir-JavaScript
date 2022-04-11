let tipo = ""

const tiposPermitidos = {
    'mamifero': true,
    'anifibio': true,
    'reptil': true,
}

const cachorro = {
    name: 'rezx',
    get tipo(){
        return tipo
    },
    set tipo(_tipo){
        if(tiposPermitidos[_tipo]){
            tipo = _tipo
        }
        else{
            throw new Error('animal n permitido')
        }
    }
}

// IIFE para evitar sujar escopo global
