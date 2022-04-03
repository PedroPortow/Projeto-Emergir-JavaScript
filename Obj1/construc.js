'use strict';

function Task(name){
    

    let _name = name

    
    this.createdAt = new Date()
    this.updatedAt = null
    this.changeName = function(newName){
        _name = newName
        this.updatedAt = new Date()
    }
    this.getName = function(){
        return _name
    }
}


const task1 = new Task('minha tarefa')
console.log(task1.getName())
const task2= new Task('minha segunda tarefinha')
console.log(task2)
task1.changeName('lalalal')
console.log(task1.getName())