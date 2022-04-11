const str = 'global string'

function teste(){
    // const str = 'local string'
    console.log(this)
    // console.log(str)
}
const teste2 = () => {
    console.log('arrow')
    console.log(this)
}
const obj = {
    foo: 'bar',
    teste,
    teste2
}


obj.teste()
teste2()
obj.teste2()