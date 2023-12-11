/*
[DESAFIO] Crie um jogo onde o computador vai sortear um número entre 1 e 5 o
jogador vai tentar descobrir qual foi o valor sorteado.
*/
function sort(){
    let num1 = document.getElementById('num1');
    let n1 = Number(num1.value);
    let sorteio = Math.floor(Math.random()*350)+1; //Gerar number aleatorio;
    let res = sorteio;
    if( n1 == sorteio){
        msg.innerHTML = `Parabéns o número sorteado foi ${res} e você acertou.`
    }else{
        msg.innerHTML = `Você errou o número sorteado foi ${res} , Boa Sorte na próxima.`
    }
}