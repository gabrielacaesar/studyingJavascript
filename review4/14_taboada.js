var txt = document.querySelector("#txt");


txt.addEventListener('input', function(){
    console.log('input');
    mostrarTaboada();
})

function mostrarTaboada(){    
    
    var numeroDigitado = parseFloat(txt.value);
    var str = '';
    
    if (!isNaN(numeroDigitado)){
        for(var i = 0; i <= 1000; i++){
        var resultado = numeroDigitado * i;

        if(i%10 == 0 && i != 0){
            //mostrarMensagem('<hr>');
            str += '<hr>';
        }
        //mostrarMensagem(numeroDigitado + " x "+ i +" = "+ resultado +" <br>");    
        str += (numeroDigitado + " x "+ i +" = "+ resultado +" <br>");    
    }
    
    limparMensagem();
    mostrarMensagem(str);
    }
    
    else {
        alert("somente números!"); //nao precisa de RETURN porque ela precisa sair da funcao;
        //e seguir para o restante do codigo;
        //poderiamos ter usado RETURN no IF STATEMENT, e dai nao precisariamos do ELSE.
    }  
}
