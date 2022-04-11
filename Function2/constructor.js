function Cachorro(name){
    this.name = name
    console.log(this)
    let posicao = 0

    this.latir = function(){
        console.log(this.name, 'au au au')
    }


}

const rex = new Cachorro('rex')
const eugenio = new Cachorro('eugenio')
console.log(rex)
rex.latir()