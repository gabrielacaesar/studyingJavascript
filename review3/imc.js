
var peso = document.querySelector("#peso");

var altura = document.querySelector("#altura");


function calcularImc() {
    
    var pesoValue = parseFloat(peso.value);

    var alturaValue = parseFloat(altura.value);

    var alturaQuadrado = alturaValue ** 2;

	var imc = pesoValue / alturaQuadrado;
    
    console.log(imc);
	return imc;
};
