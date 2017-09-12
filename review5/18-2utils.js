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
    
    x++;
     
}

