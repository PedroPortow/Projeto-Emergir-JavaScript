'use strict';

const txtTitulo = document.getElementById('txtTitulo')
const btn = document.getElementById('btn')
const formCadastro = document.querySelector('.formCadastro')



formCadastro.addEventListener('submit', function(e){

    console.log(txtTitulo.value)

    if(!txtTitulo.value){
        
        showFeedback('Preencha tudo', function(){
            txtTitulo.focus()

        })
        e.preventDefault()
    }
})

const txtDescricao = document.getElementById('txtDescricao')
const contadorContainer = document.getElementById('contador')
const resta = contadorContainer.getElementsByTagName('span')[0]
const max = txtDescricao.maxLength

txtDescricao.addEventListener('input', function(){
    let numLetras = this.value.length
    let caracSobra = parseInt(max) - parseInt(numLetras)
    resta.textContent = caracSobra
})

resta.textContent = max

btn.disabled = true

const chk = document.getElementById('chkAceito')
chk.addEventListener('change', function(){
    btn.disabled = !this.checked
})

const feedback = document.getElementById('feedbackMessage')
const feedbackCloseBtn = feedback.getElementsByTagName('button')[0]



function showFeedback(msg, cb){
    // feedback.setAttribute('class', 'show')
    // feedback.textContent = msg
    feedback.classList.add('show')
    feedback.getElementsByTagName('p')[0].textContent = msg

    feedbackCloseBtn.focus()

    function showMsg(){
        feedback.classList.remove('show')
        feedbackCloseBtn.removeEventListener('click', showMsg)
        feedbackCloseBtn.removeEventListener('keyup', keyBtn)

        if(typeof cb === 'function'){
            cb()
        }
    }

    function keyBtn(e){
        if(e.keyCode === 27){
            showMsg()
        }
    }

    
    feedbackCloseBtn.addEventListener('click', showMsg)

    feedbackCloseBtn.addEventListener('keyup', keyBtn)

}


