function calcularMedia(n1, n2, n3){
    var media = (n1 + n2 + n3) / 3;    
    return media;    
}


function mostrarMensagem(str){     
    var resultado = document.querySelector('#resultado');
    
    //resultado.innerHTML = str;
    
    resultado.innerHTML = resultado.innerHTML + str;
    //resultado.innerHTML += str;
}


function limparMensagem(){
    var resultado = document.querySelector("#resultado");
    
    resultado.innerHTML = '';
}

function sortearNumero(n){
    
    if(!n || typeof n != 'number'){
        throw new Error('função sortearNumero precisa de um parametro que seja número')
    }
    var sorteado = Math.random(); //retorna de 0 a 0.99999
    sorteado = sorteado * n;
    sorteado = Math.floor(sorteado); //math.floor arredonda para baixo
    return sorteado;
    
}


function calcularImc(peso, altura){    
    return peso / (altura * altura);
    
}

function $(seletor){
    return document.querySelector(seletor);
}

function $$(seletor){
    return document.querySelectorAll(seletor);
}


function validarEmail(email){
    //return (email.indexOf('@') >= 0);
    var padraoEmail = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/;
    
    if(!email || typeof email !== 'string'){
        throw new Error('funcao validarEmail precisa de um parametro string');
        
    }
    
    return padraoEmail.test(email);
}

function validarCPF(cpf){
    
    var padraoCPF = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/;
    
    return padraoCPF.test(cpf);   
    
}









