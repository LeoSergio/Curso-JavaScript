/*
Desenvolva um programa que leia o nome de um funcionário, seu salário,
quantos anos ele trabalha na empresa e mostre seu novo salário, reajustado de
acordo com a tabela a seguir:
- Até 3 anos de empresa: aumento de 3%
- entre 3 e 10 anos: aumento de 12.5%
- 10 anos ou mais: aumento de 20%
*/
function reajuste(){
    let nome = document.getElementById('name');
    let name = (nome.value).charAt(0).toUpperCase() + (nome.value).slice(1);

    let num1 = document.getElementById('sa');
    let sa = Number(num1.value);

    let num2 = document.querySelector('#year');
    let year = Number(num2.value);
    

    if( year <= 3){
        let up = sa + (sa * 0.03);
        msg.innerHTML = `<strong>${name}</strong> Você trabalha há <strong>${year}</strong> anos, você obteve um aumento de 3%, parabéns. Seu novo salário é <strong>${up.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>`;
    }else if(year <= 10){
        let up = sa + (sa * 0.125);
        msg.innerHTML = `<strong>${name}</strong> Você trabalha há <strong>${year} </strong>anos, você obteve um aumento de 12.5%, parabéns. Seu novo salário é <strong>${up.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>`;
    }else{
        let up = sa + (sa * 0.2);
        msg.innerHTML = `<strong>${name}</strong> Você trabalha há <strong>${year}</strong> anos, você obteve um aumento de 20%, parabéns. Seu novo salário é <strong>${up.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>`;
    }
}