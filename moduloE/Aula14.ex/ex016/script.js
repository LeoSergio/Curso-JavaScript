/*
esse Programa vai pegar o valor do inicio e fim e vai mostrar a diferença entre ele de acordo com o passo. 
Ex: Inicio:5
    fim:12:
    passo:2
    contador será 5 7 9 11 e encerra pois passa.
obs:Se não tiver inicio, mostrar mensagem impossivel contar.
    se o passo for 0 exibir um alert com 'Passo invalido, considerando passo1 e o passa vai ser considerado 1'
*/

function contar(){
    var inicio = document.getElementById('start');
    var v1 = inicio;

    var fim = document.querySelector('input#end');
    var v2 = fim;

    var passo = document.getElementById('pass');
    var v3 = passo;

    var res = v1;//tem que ser menor q o fim;

    for(var ini = res; res <= fim; v3){
        msg.innerHTML = `Essa é a Contagem ${res}`;
    }
}