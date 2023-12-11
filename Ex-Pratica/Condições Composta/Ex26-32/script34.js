/*
O Índice de Massa Corpórea (IMC) é um valor calculado baseado na altura e no
peso de uma pessoa. De acordo com o valor do IMC, podemos classificar o
indivíduo dentro de certas faixas.
- abaixo de 18.5: Abaixo do peso
- entre 18.5 e 25: Peso ideal
- entre 25 e 30: Sobrepeso
- entre 30 e 40: Obesidade
- acima de 40: Obseidade mórbida
Obs: O IMC é calculado pela expressão peso/altura2 (peso dividido pelo quadrado
da altura)
*/
function imc(){
    let num1 = document.querySelector('#num1');
    let kg = Number(num1.value);

    let alt = document.querySelector('#alt');
    let alt1 = Number(alt.value);

    let imc1 = kg / alt1**2;
    if(imc1 < 18.5){
        msg.innerHTML = `Abaixo do Peso.`;

    }else if(imc1 >=18.5 && imc1 < 25){
        msg.innerHTML = `Peso Ideal.`;
        
    }else if(imc1 >= 25 && imc1<30){
        msg.innerHTML = `Sobrepeso.`;

    }else if(imc1 >= 30 && imc1 < 40){
        msg.innerHTML = `Obesidade.`;
    }else if(imc1 > 40){
        msg.innerHTML = `Obesidade Mórbida.`
    }
    alert(`${imc1}`);
    }
    
