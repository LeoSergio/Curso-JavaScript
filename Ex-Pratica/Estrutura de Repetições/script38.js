/*
For(inicio;teste;encremento){Execulta bloco se for verdadeiro}
for(var c =1; c <=4; c++)
//Modo for é o mais usado entre os programadores;
Escreva um programa que mostre na tela a seguinte contagem:
6 7 8 9 10 11 Acabou!
*/

for(let ct=6; ct<=11; ct++){
    res.innerHTML = `Sua contagem vai de 6 à ${ct}`
    document.write('' + ct);
}
document.write('fim');
