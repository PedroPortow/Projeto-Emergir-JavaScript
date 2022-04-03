function changeName(name){

    this.name = name
    this.updatedAt = new Date()
}


const task1 = {
    name: 'task 1',
    createdAt: new Date(),
    updatedAt: null,
    completed: false,
    changeName
}
const task2= {
    name: 'task 2',
    createdAt: new Date(),
    completed: false,
    changeName
}
const task3 = {
    name: 'task 3',
    createdAt: new Date(),
    completed: false,
}

// task1.changeName('nome atualizado')
// console.log(task1)
task1.name = 'task 1 upated'
task1.updatedAt = 'updated at now'
task2.changeName('nome pedro')
console.log(task2)