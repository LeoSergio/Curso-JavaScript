/* Crie um programa que leia o número de dias trabalhados em um mês e mostre o
salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25
por hora trabalhada.*/
function work(){
    let tr = document.getElementById('day');
    let dayt = Number(tr.value);
    let hr = 8;
    let hrt = 25 * hr; //Diaria
    let res = dayt * hrt;
    msg.innerHTML = `O salário desse Funcionário é de <strong>${res.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>.`
    

     
}