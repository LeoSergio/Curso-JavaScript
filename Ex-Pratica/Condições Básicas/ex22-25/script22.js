/*
    Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua
situação em relação ao alistamento militar.
- Se estiver antes dos 18 anos, mostre em quantos anos faltam para o
alistamento.
- Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do
alistamento.
*/
function militar(){
    let ano = document.querySelector('#ano');
    let year = Number(ano.value);
    let anoAtual = new Date();
    let ano1 = anoAtual.getFullYear();
    let idade = ano1 - year;
    let me = 18-idade ;
    let ma = idade-18;
    
    
    if(idade < 18){
        msg.innerHTML = `Você tem ${idade} anos, não pode se alistar, faltam ${me} ano(s).`;
    }else{
        msg.innerHTML = `Você tem ${idade} anos,devia se alistar, passou-se ${ma} ano(s)[Risco de Multa].`
    }
}