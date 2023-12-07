/*
Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua
média e mostre na tela. No final, analise a média e mostre se o aluno teve ou
não um bom aproveitamento (se ficou acima da média 7.0).
*/
function scool(){
    //Pegar nome e notas do input
    let mat = document.querySelector('#mat');
    let name = mat.value.charAt(0).toUpperCase()+ mat.value.slice(1); //Letra Maiuscula
    
    let not = document.getElementById('not1');
    let not1 = Number(not.value);
    let not2 = document.querySelector('#not2');
    let nota2 = Number(not2.value);
    let med = (not1 + nota2)/2;
       

    medi.innerHTML = `Suas notas em <strong>${name}</strong> são <strong>${not1}</strong> e <strong>${nota2}</strong>, portanto sua Média é de <strong>${med}</strong>;`

    //Se a nota for maior que 7 = bom aproveitamento;
    if(med > 7){
        msg.innerHTML = `Sua média em <strong>${name} </strong>é de <strong>${med} </strong>Parabens você teve um bom aproveitamento.`
    }else{
        msg.innerHTML = `Sua média foi <strong>${med}</strong>, Você não teve um bom aproveitamento, estude mais!`
    }
}