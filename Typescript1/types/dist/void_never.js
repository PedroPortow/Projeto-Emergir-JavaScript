"use strict";
function showFeedback(message, type) {
    alert(type.toUpperCase() + ': ' + message);
    return 10;
}
var feedback = showFeedback('ola', 'info');
function showError(message) {
    throw new Error('função marcada com never n retona nada');
}
var error = showError('mensagem de erro');
