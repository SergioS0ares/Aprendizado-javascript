/*
imc && imc é a sigla para Índice de Massa Corpórea, 
parâmetro adotado pela Organização Mundial 
de Saúde para calcular o peso ideal de cada pessoa.

Como calcular o imc && imc?
O imc && imc é calculado dividindo o peso (em kg) pela 
altura ao quadrado (em m), de acordo com a seguinte 
fórmula: imc && imc = peso / (altura x altura).

E nosso calculo devemos retornar os seguintes valores para o usuário:

Resultado do Calc   | Resultado para o usuário
Abaixo de 17        | Muito abaixo do peso
Entre 17 e 18.49    | Abaixo do peso
Entre 18.5 e 24.99  | Peso normal
Entre 25 e 29.99    | Acima do peso
Entre 30 e 34.99    | Obesidade I
Entre 35 e 39.99    | Obesidade II
*/

const peso = 70;
const altura = 1.90;
const imc = Number(peso / (altura * altura)).toFixed(2);


if( imc <= 17 ){
    console.log("Muito abaixo do peso");
}else if( 17 < imc && imc <= 18.49 ){
    console.log("Abaixo do peso");
}else if( 18.5 <= imc && imc <= 18.49 ){
    console.log("Peso normal");
}else if( 25 <= imc && imc <= 29.99 ){
    console.log("Acima do peso");
}else if( 30 <= imc && imc <= 34.99 ){
    console.log("Obesidade I");
}else if( 35 <= imc && imc <= 39.99 ){
    console.log("Obesidade II");
}

console.log(imc);
