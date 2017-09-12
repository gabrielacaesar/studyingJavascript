function calcularMedia(n1, n2, n3){
    var media = (n1 + n2 + n3) / 3;    
    return media;    
}


function mostrarMensagem(str){     
    var resultado = document.querySelector('.info-imc');
    
    //resultado.innerHTML = str;
    
    resultado.innerHTML = resultado.innerHTML + str;
    //resultado.innerHTML += str;
}


function limparMensagem(){
    var resultado = document.querySelector("#resultado");
    
    resultado.innerHTML = '';
}

function sortearNumero(n){
    
    if(!n || typeof n != "number"){
        throw new Error("função precisa de um número");   
    }
    var sorteado = Math.random(); //retorna de 0 a 0.9999;
    sorteado = sorteado * n;
    sorteado = Math.floor(sorteado); //Math.floor arredonda para baixo;
    return sorteado;
}


var peso = document.querySelectorAll(".info-peso");
var altura = document.querySelectorAll(".info-altura");

var pesoFloat = parseFloat(peso[0].textContent);
var alturaFloat = parseFloat(altura[0].textContent);

function calcularImc(pesoFloat, alturaFloat){
    var imc = pesoFloat / (alturaFloat * alturaFloat);
    return imc;
}

var resultadoImc = calcularImc(pesoFloat, alturaFloat);

mostrarMensagem(resultadoImc);