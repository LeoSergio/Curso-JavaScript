/*
Crie um programa que calcule e mostre na tela o resultado da soma entre 6 +
8 + 10 + 12 + 14 + ... + 98 + 100.
*/

function loop(){
    let i =6;
    let f = 10;
    let inc = 2;
for(let ct=i; i<=f; i+=inc){
    let cont = ct;
    res.innerHTML += `${cont}`;
}
}