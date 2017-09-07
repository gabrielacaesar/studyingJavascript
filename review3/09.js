var menos = document.querySelector("#btnMenos");
var mais = document.querySelector("#btnMais");
var numero = document.querySelector("#txt");



mais.onclick = function() {
    var numeroValue = parseFloat(numero.value) +1;
    numero.value = numeroValue;
}

//OU


menos.addEventListener("click", function(){
    if (numero.value > 0)
    numero.value = parseInt(numero.value) -1;            
});

mais.addEventListener("click", function(){
    if (numero.value < 5)
    numero.value = parseInt(numero.value) +1;  
});

//dever de casa

//no botão de adicionar (+), só pode usar o clique para chegar até 5
