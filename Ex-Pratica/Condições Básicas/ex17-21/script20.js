/*
Desenvolva um programa que leia um número inteiro e mostre se ele é PAR ou
ÍMPAR.
*/
function game(){
    let num = document.querySelector('#num');
    let n1 = Number(num.value);
    if(n1%2 == 0){
        msg.innerHTML = `${n1} é <strong>par</strong>;`;
    }else{
        msg.innerHTML = `${n1} é <strong>impar</strong>;`
    }
}