var numero = document.querySelector("#txt");
var clique = document.querySelector("#btnMultiplica");


clique.addEventListener("click", function(){
    
    var numeroValue = parseInt(numero.value);
    
    for (var i = 1; i < 100; i++){
        
        multiplicacao = numeroValue * i;
        
        if(i%10 == 0 && i != 0){
            mostrarMensagem("<hr>");
        }
        
        mostrarMensagem(numeroValue + " * " + i + " = " + multiplicacao + "<br>");
    }
});


//numeroValue++ é igual a numeroValue += 1 e também a numeroValue = numeroValue + 1
