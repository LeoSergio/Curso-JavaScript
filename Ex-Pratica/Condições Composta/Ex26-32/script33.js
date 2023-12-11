/*
Escreva um programa para aprovar ou não o empréstimo bancário para a compra
de uma casa. O programa vai perguntar o valor da casa, o salário do comprador e
em quantos anos ele vai pagar. Calcule o valor da prestação mensal, sabendo que
ela não pode exceder 30% do salário ou então o empréstimo será negado.
*/
function banco(){
    let num1 = document.querySelector('#num1');
    let vHouse = Number(num1.value);

    let sal1 = document.querySelector('#sal1');
    let sWin = Number(sal1.value);

    let year = document.querySelector('#year');
    let yearPay = Number(year.value);

    let payM = vHouse/ (yearPay*12);
    let sal = sWin * 0.3;

    if(payM < sal){
        msg.innerHTML = `Emprestimo Aprovado.`
    }else{
        msg.innerHTML = `Emprestimo negado, Não atingiu o requerimento`
    }
}