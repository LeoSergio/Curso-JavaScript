/*
Uma empresa precisa reajustar o salário dos seus funcionários, dando um
aumento de acordo com alguns fatores. Faça um programa que leia o salário atual,
o gênero do funcionário e há quantos anos esse funcionário trabalha na empresa.
No final, mostre o seu novo salário, baseado na tabela a seguir:
- Mulheres
- menos de 15 anos de empresa: +5%
- de 15 até 20 anos de empresa: +12%
- mais de 20 anos de empresa: +23%
- Homens
- menos de 20 anos de empresa: +3%
- de 20 até 30 anos de empresa: +13%
- mais de 30 anos de empresa: +25%
*/
function money(){
    let sal = document.getElementById('sal');
    let salAtual = Number(sal.value);
    let gen = document.querySelector('#gen');
    let gene = gen.value;
    let years = document.getElementById('years');
    let yWork = Number(years.value);
//Mulheres
    if((gene == 'f' || gene == 'F') && yWork <15){
        let newSal = salAtual + (salAtual*0.05);
        msg.innerHTML = `Parabéns seu novo Salário é ${newSal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
    }else if((gene == 'f' || gene == 'F') && yWork >= 15 && yWork <=20){
        let newSal = salAtual + (salAtual*0.12);
        msg.innerHTML = `Parabéns seu novo Salário é ${newSal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
    }else{
        let newSal = salAtual + (salAtual*0.23);
        msg.innerHTML = `Parabéns seu novo Salário é ${newSal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
    }
//Homens
    if((gene == 'm' || gene == 'M')&& yWork<20){
        let newSal = salAtual+(salAtual*0.03);
        msg.innerHTML = `Parabéns seu novo Salário é ${newSal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
    }else if((gene == 'm' || gene == 'M')&& (yWork>=20 && yWork<=30)){
        let newSal = salAtual+(salAtual*0.13);
        msg.innerHTML = `Parabéns seu novo Salário é ${newSal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
    }else{
        let newSal = salAtual+(salAtual*0.25);
        msg.innerHTML = `Parabéns seu novo Salário é ${newSal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
    }
}