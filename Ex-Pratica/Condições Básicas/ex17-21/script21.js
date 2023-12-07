/*
Faça um algoritmo que leia um determinado ano e mostre se ele é ou não
BISSEXTO.
*/
function year(){
    let aBi = document.querySelector('#aBi').value;
    let ano = Number(aBi);

    if( (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0){
        msg.innerHTML = `${ano} é um ano Bissexto.`;
    }else{
        msg.innerHTML = `${ano} não é um ano Bissexto.`;
    }
}