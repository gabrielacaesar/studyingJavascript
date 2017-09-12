var txt = document.querySelector("#txt");
var btn = document.querySelector("#btnMultiplica");

btn.addEventListener('click', function(){
    
    //i = i + 1
    //i += 1
    //i++
    var numeroDigitado = parseFloat(txt.value);
    
for(var i = 0; i <= 100; i++){
    var resultado = numeroDigitado * i;
    
    if(i%10 == 0 && i != 0){
        mostrarMensagem('<hr>');
    }
    
    mostrarMensagem(numeroDigitado + " x "+ i +" = "+ resultado +" <br>");
    
    
}  
        
})
