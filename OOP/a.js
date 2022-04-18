var pai = { 
    getValor: function funcao(){ 
      return this.valor; 
    }, 
    valor:10 
  }; 
  function outraFuncao(){ 
    return this.valor + this.valor; 
  } 
  var filho = Object.create(pai); 
  filho.getValor = function outraFuncao(){ 
    return this.valor + 5; 
  }; 
  filho.valor = 2; 
  pai.getValor(); //Continua retornando 10 
  filho.getValor(); //Retorna 7