/*
function nome(){
    var name = document.getElementById('name');
    var msg = name.value;

    res.innerHTML = `Seja bem Vindo ${msg} é um prazer te conhecer!`;
}
*/
/*
function funcionario(){
    var name = document.getElementById;('name');
    var fun = name.value;

    var sala = document.getElementById('sal');

    var num = Number(sala.value).toLocaleString('pt-BR',{ style:'currency', currency: 'BRL'});

    res.innerHTML = `O(a) Funcionário(a) ${fun} tem um salário de ${num} em junho`;
}
*/
function soma(){
    var n1 = document.getElementById('n1');
    var s1 = Math.trunc(n1.value);

    var n2 = document.getElementById('n2');
    var s2 = Math.trunc(n2.value);

    var soma = s1 + s2;
    var resultado = soma;

    res.innerHTML = `A soma entre ${s1} e ${s2} é igual a ${resultado}.`
}



