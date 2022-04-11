function teste(str, n){
    console.log(this.name)
    console.log(str, n)
}
//let e const não poluem o escopo global do browser 

//call -> altera o this
//bind -> retorna uma nova function com this modificado
teste.call({name: 'maria'}, 'str', 20)
teste.apply({name: 'joão'}, ['da silva', 29])
teste.call({name: 'roger'}, ...['da silva', 29])

const teste2 = teste.bind({name: 'joaquin'})
//aqui bind retornou uma nova function e armazenou
//ela dentro de teste2

teste2('joaquineiro', 30)
 
document.addEventListener('click', teste2)