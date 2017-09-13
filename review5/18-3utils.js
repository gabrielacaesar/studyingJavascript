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


//função CALCULAR IMC //

var peso = document.querySelectorAll(".info-peso");
var altura = document.querySelectorAll(".info-altura");

var pesoFloat = parseFloat(peso[0].textContent);
var alturaFloat = parseFloat(altura[0].textContent);

function calcularImc(pesoFloat, alturaFloat){
    var imc = pesoFloat / (alturaFloat * alturaFloat);
    return imc;
}

// LOOP para calcular o IMC de geral

var linhas = document.querySelectorAll("table tbody tr");
console.log(linhas);

var x = 0;
while(linhas[x]){
    console.log(linhas[x]);
    var linhaPeso = linhas[x].querySelector(".info-peso");
    console.log(linhaPeso);
    var textlinhaPeso = linhaPeso.textContent;
    console.log(textlinhaPeso);
    
    var linhaAltura = linhas[x].querySelector(".info-altura");
    console.log(linhaAltura);
    var textlinhaAltura = linhaAltura.textContent;
    console.log(textlinhaAltura);
    
    var imc = calcularImc(textlinhaPeso, textlinhaAltura);
    
    linhas[x].querySelector(".info-imc").textContent = imc.toFixed(2);
    
    label();
    
    x++;
     
};

function label(){
    
    if(imc < 18.5){
        linhas[x].className = "abaixo";
    }
    
    else if(imc < 24.9){
        linhas[x].className = "normal";
    }
    
    else if(imc < 29.9){
       linhas[x].className = "acima"; 
    }
    
    else if(imc < 34.9){
        linhas[x].className = "Obesidade1";
    }
    
    else if(imc < 39.9){
        linhas[x].className = "Obesidade2";
    }
    
    else (imc > 40){
        linhas[x].className = "Obesidade3";
    }
};

