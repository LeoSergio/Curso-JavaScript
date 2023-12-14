/*
Um programa de vida saudável quer dar pontos atividades físicas que podem
ser trocados por dinheiro. O sistema funciona assim:
- Cada hora de atividade física no mês vale pontos
- até 10h de atividade no mês: ganha 2 pontos por hora
- de 10h até 20h de atividade no mês: ganha 5 pontos por hora
- acima de 20h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês,
calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.
*/
function exercice(){
    let hrs = document.getElementById('hrs');
    let hrsm = Number(hrs.value);

    if(hrsm<=10){
        let pt = hrsm*2;
        let money = pt*0.05;
        msg.innerHTML = `Você teve ${hrsm} horas por mês, ganhou ${pt} Pontos e Faturou ${money}`
    }else if(hrsm>10 && hrsm<=20){
        let pt = hrsm*5;
        let money = pt*0.05;
        msg.innerHTML = `Você teve ${hrsm} horas por mês, ganhou ${pt} Pontos e Faturou ${money}`
    }else{
        let pt = hrsm*10;
        let money = pt*0.05;
        msg.innerHTML = `Você teve ${hrsm} horas por mês, ganhou ${pt} Pontos e Faturou ${money.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
    }
}