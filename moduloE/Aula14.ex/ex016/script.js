function contar() {
    var inicio = document.getElementById('start').value;
    var v1 = Number(inicio);

    var fim = document.querySelector('input#end').value;
    var v2 = Number(fim);

    var passo = document.getElementById('pass').value;
    var v3 = Number(passo);

    var msg = document.getElementById('msg'); // Adicionando a referência ao elemento onde o resultado será exibido
    var res = v1;

    for (var ini = res; res <= v2; res += v3) {
    msg.innerHTML = `Sua contagem é ${res}`;

}

if(v3 == 0){
    alert('[ERRO] o Passo não pode ser 0');
}
}


/*

function contar(){
    var inicio = document.getElementById('start');
    var v1 = inicio.value;

    var fim = document.querySelector('input#end');
    var v2 = fim.value;

    var passo = document.getElementById('pass');
    var v3 = passo.value;

    var ini = v1;
    var res = v1 + v3;
    
    for(var ini = res; res <= v2; res += v3){
        msg.innerHTML = `Sua contagem é ${res}`;
    } 
}
esse Programa vai pegar o valor do inicio e fim e vai mostrar a diferença entre ele de acordo com o passo. 
Ex: Inicio:5
    fim:12:
    passo:2
    contador será 5 7 9 11 e encerra pois passa.
obs:Se não tiver inicio, mostrar mensagem impossivel contar.
    se o passo for 0 exibir um alert com 'Passo invalido, considerando passo1 e o passa vai ser considerado 1'
*/