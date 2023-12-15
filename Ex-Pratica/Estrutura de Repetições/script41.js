/*
Desenvolva um programa que mostre na tela a seguinte contagem:
100 95 90 85 80 ... 0 Acabou!
*/
let i =100;
for(let ct=i; ct>=0; ct-=5){
    res.innerHTML = `Contagem regressiva de ${i} , Diminuindo em 5`
    document.write(ct+', ')
}
    document.write('FIM!')