function showFeedback(message: string, type: string){
    alert(type.toUpperCase() + ': ' + message)
    return 10
}

const feedback = showFeedback('ola', 'info')

function showError(message: string): never{
    throw new Error('função marcada com never n retona nada')
}

const error = showError('mensagem de erro')


