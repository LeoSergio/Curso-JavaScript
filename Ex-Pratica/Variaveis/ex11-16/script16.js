/*
[DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um
fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele
já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule
quantos dias de vida um fumante perderá e exiba o total em dias.
*/
function lost(){
    let cig = document.getElementById('cig');
    let qcig = Number(cig.value);
    let hrm = 10;

    let day = qcig * hrm; //Quantidade de hrs por dia a menos pro fumante.

    let year = document.querySelector('#year');
    let qyear = Number(year.value);
    let year1 = 365;
    let tyear = qyear * year1; //Quant. de anos;

    let qt = (tyear*day)/60;
    let res = qt / 24;
    
    msg.innerHTML = `Se você fumar <strong>${qcig}</strong> Cigarros por dia durante <strong>${qyear} </strong>ano(s), você diminuira <strong>${res.toFixed(0)}</strong> dias da sua vida`;

}