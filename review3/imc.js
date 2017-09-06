
var peso = document.querySelector("#peso");

var altura = document.querySelector("#altura");

var pesoValue = parseFloat(peso);

var alturaValue = parseFloat(altura);

var alturaQuadrado = alturaValue ** 2;



function calcularImc(pesoValue, alturaValue) {

	var imc = peso / altura;
	return imc;
};

console.log(calcularImc(pesoValue, alturaValue));
