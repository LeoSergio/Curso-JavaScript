/*
Crie um programa que leia duas notas de um aluno e calcule a sua média,
mostrando uma mensagem no final, de acordo com a média atingida:
- Média até 4.9: REPROVADO
- Média entre 5.0 e 6.9: RECUPERAÇÃO
- Média 7.0 ou superior: APROVADO
*/
function media(){
    let num1 = document.getElementById('num1');
    let not1 = Number(num1.value);
    let num2 = document.getElementById('num2');
    let not2 = Number(num2.value);
    let med = (not1 + not2) / 2;

    if( med <= 4.9){
        msg.innerHTML = `Sua média foi <strong>${med}</strong>, Você está <strong>REPROVADO!</strong>`
    }else if(med <= 6.9){
        msg.innerHTML = `Sua média foi <strong>${med}</strong>, Você está em <strong>RECUPERAÇÃO!</strong>`
    }else{
        msg.innerHTML = `Sua média foi <strong>${med}</strong>, Você está <strong>APROVADO!</strong>`
    }
}