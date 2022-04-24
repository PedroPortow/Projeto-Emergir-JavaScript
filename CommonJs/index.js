const fs = require('fs')
const emoji = require('node-emoji')

const teste = require('./modules/mod1');


fs.writeFile('teste.txt', 'ola mundo', err => {
    if(err) throw err
    console.log('saved!', emoji.get('coffee'))
})

console.log(teste)

