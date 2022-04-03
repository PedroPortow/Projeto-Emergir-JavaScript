'use strict';

const itemInput = document.getElementById('item-input')
const todoAddForm = document.getElementById('todo-add')
const ul = document.getElementById('todo-list')
const lis = ul.getElementsByTagName('li');

let arrTasks = getSavedData()

// function addEventli(li){
//     li.addEventListener('click', function(){
//         console.log(this)
//     })

// }

function getSavedData(){
    let tasksData = localStorage.getItem('tasks')
    tasksData = JSON.parse(tasksData)

    return taskskData && tasksData.length ? tasksData :  [
        {
            name: 'task 1',
            createdAt: Date.now(),
            completed: false
        }
    ]
}

function setNewData(){
    localStorage.setItem('tasks', JSON.stringify(arrTasks))
}

setNewData()
function generateLiTask(obj){
    const li = document.createElement('li')
    const p = document.createElement('p')
    const checkButton = document.createElement('button')
    const editButton = document.createElement('i')
    const deleteButton = document.createElement('i')

    li.className = "todo-item"

    checkButton.className = 'button-check'
    checkButton.innerHTML = `<i class="fas fa-check ${obj.completed ? '' : 'displayNone'}" data-action="checkButton"></i>`
    checkButton.setAttribute('data-action', "checkButton")

    li.appendChild(checkButton)

    p.className = 'task-name'
    p.textContent = obj.name
    li.appendChild(p) 

    editButton.className = 'fas fa-edit'
    editButton.setAttribute('data-action', "editButton")
    li.appendChild(editButton)

    const containerEdit  = document.createElement('div')
    containerEdit.className = 'editContainer'
    const inputEdit = document.createElement('input')
    inputEdit.setAttribute('type', "text")
    inputEdit.className = 'editInput'
    inputEdit.value = obj.name

    containerEdit.appendChild(inputEdit)
    const containerEditButton = document.createElement('button')
    containerEditButton.className = 'editButton'
    containerEditButton.textContent = 'Edit'
    containerEditButton.setAttribute('data-action', 'containerEditButton')
    containerEdit.appendChild(containerEditButton)
    const containerCancelButton = document.createElement('button')
    containerCancelButton.className = 'cancelButton'
    containerCancelButton.textContent = 'Cancel'
    containerCancelButton.setAttribute('data-action', 'containerCancelButton')
    containerEdit.appendChild(containerCancelButton)

    li.appendChild(containerEdit)

    deleteButton.classList.add("fas", "fa-trash-alt")
    deleteButton.setAttribute('data-action', 'deleteButton')  
    li.appendChild(deleteButton)

    // addEventli(li)
    return li
}

function renderTasks(){
    ul.innerHTML = ''
    arrTasks.forEach(taskObj => {
        ul.appendChild(generateLiTask(taskObj))
    });
}

function addTask(task){
  
    arrTasks.push({
        name: task,
        createdAt: Date.now(),
        completed: false
    })
    setNewData()

}

function clickedUl(e){
    const dataAction = e.target.getAttribute('data-action')
    if(!dataAction) return

    let currentLi = e.target;
    while(currentLi.nodeName !== 'LI'){
        currentLi = currentLi.parentElement
    }

    const currentLiIndex = [...lis].indexOf(currentLi)
    console.log(currentLi)




    const actions = {
        editButton: function(){
            const editContainer = currentLi.querySelector('.editContainer');
            editContainer.style.display = 'flex';
            [...ul.querySelectorAll('.editContainer')].forEach(container => {
                container.removeAttribute('style')
            });
        },
        deleteButton: function(){
            arrTasks.splice(currentLiIndex, 1)
            renderTasks()
            setNewData()
        },
        containerEditButton: function(){
            const val = currentLi.querySelector('.editInput').value
            arrTasks[currentLiIndex].name = val 
            renderTasks();
            setNewData()
        },
        containerCancelButton: function(){
            currentLi.querySelector('.editContainer').removeAttribute('style')

            currentLi.querySelector('.editInput').value = arrTasks[currentLiIndex].name
        },
        checkButton: function(){
            arrTasks[currentLiIndex].completed = !arrTasks[currentLiIndex].completed;

            if(arrTasks[currentLiIndex].completed){
                currentLi.querySelector('.fa-check').classList.remove('displayNone')
            }
            else{
                currentLi.querySelector('.fa-check').classList.add('displayNone')
            }
          
            renderTasks()
            setNewData()
        }
    }

    if(actions[dataAction]){
        actions[dataAction]
    }
}

todoAddForm.addEventListener('submit', function(e){
    e.preventDefault()
    ul.APPEND += `
    <li class="todo-item">
        <button class="button-check">
            <i class="fas fa-check displayNone"></i>
        </button>
        <p class="task-name">${itemInput.value}</p>
        <i class="fas fa-edit"></i>
   <div class="editContainer">
            <input class="editInput" type="text">
            <button class="editButton">Edit</button>
            <button class="cancelButton">Cancel</button>
        </div> 
        <i class="fas fa-trash-alt"></i>

    </li>
    `

    addTask(itemInput.value)
 
    itemInput.value = '';
    itemInput.focus();

    renderTasks();
});

ul.addEventListener('click', clickedUl)

