function criarCachorro(name){
    let pos = 0
    return {
        name,
        latir(){
            console.log(this.name, 'ta latindo')
        },
        andar(distancia){
            pos += distancia
            console.log(this.name, 'andou', distancia, ' m')
        },
        get posicao(){
            return pos
        }
    }
}

const toto = criarCachorro('toot')
toto.andar(20)
toto.andar(-3)
// console.log(toto.getPos())
rex.posicao


const rex = criarCachorro('rex')
rex.andar(10)
rex.andar(5)
rex.getPos()
console.log(rex)
console.log(rex.getPos())
console.log(rex.posicao)