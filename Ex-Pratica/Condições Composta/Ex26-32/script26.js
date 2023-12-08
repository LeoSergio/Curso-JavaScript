/*
Escreva um algoritmo que leia dois números inteiros e compare-os, mostrando
na tela uma das mensagens abaixo:
- O primeiro valor é o maior
- O segundo valor é o maior
- Não existe valor maior, os dois são iguais
*/
function contador(){
    let num1 = document.getElementById('num1');
    let n1 = Number(num1.value);
    let num2 = document.getElementById('num2');
    let n2 = Number(num2.value);
    if(n1 > n2){
        msg.innerHTML = `O número 1 é maior que o número 2`;
    }else if(n2>n1){
        msg.innerHTML = `O número 2 é maior que o número 1`;
    }else{
        msg.innerHTML = `Os números são iguais`;
    }
}