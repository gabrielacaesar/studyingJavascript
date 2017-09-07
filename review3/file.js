function mostrarMensagem(str){
  var resultado = document.querySelector("#resultado");
    
    //resultado.innerHTML = str; //o texto que recebemos como parâmetro é inserido no html
    
    resultado.innerHTML = resultado.innerHTML + str // ou podemos usar: resultado.innerHTML += str
};
