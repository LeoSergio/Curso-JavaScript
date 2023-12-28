/*
Crie um programa que calcule e mostre na tela o resultado da soma entre 6 +
8 + 10 + 12 + 14 + ... + 98 + 100.
*/

function loop(){
    
    
for(let i=6; i<=100; i+=2){
    let ct = i;
    res.innerHTML += `${ct} ,`;
}
}