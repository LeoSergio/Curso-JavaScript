/*
Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos
para todos, mas especialmente para mulheres. Faça um programa que leia nome,
sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo
que:
- Homens ganham 5% de desconto
- Mulheres ganham 13% de desconto
*/
function money(){
    let name = document.getElementById('name');
    let nome = (name.value).charAt(0).toUpperCase() + (name.value).slice(1);
    
    let sex = document.querySelector('#sex');
    let gen = (sex.value).toUpperCase();

    let num = document.querySelector('#num');
    let real = num.value;

    alert(`${nome} ${gen} ${real}`);
}