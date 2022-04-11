function latir(){
    console.log(this.name, 'fala: au au')
}

function miar(){
    console.log(this.name, 'fala: miauu')
}

const dog = {
    name: 'rex',
    falar(){
        console.log(this.name, 'fala: au au')
    },
    falar2(){
        console.log('falar 2 au au')
    }
}

const cat = {
    name: 'garfield',
    falar(){
        miar.call(this)
    }
}
// dog.falar()
cat.falar()
