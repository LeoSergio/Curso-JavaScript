let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let valores = [];

function isNumero(n){
    if(Number(n)>= 1 && Number(n) <=100){
        return true;
    }else{
        return false;
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true;
        
    } else{
        return false;
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} Adicionado.`
        lista.appendChild(item);
        res.innerHTML = '';
    }else{
        alert('Valor invalido ou já encontrado na lista');
    }
    num.value = '';
    num.focus();
}
function finalizar(){
    if(valores.length == 0){
        alert(`Adicione um número para poder finalizar`)
    }else{
        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];

    for( let pos in valores){
        soma+= valores[pos];
        if(valores[pos] > maior)
            maior = valores[pos];
        if(valores[pos] < menor)
            menor = valores[pos];
    }
    media = soma / tot;
    res.innerHTML = '';
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`;
    res.innerHTML += `<p>O maior número cadastrado foi ${maior}</p>`;
    res.innerHTML += `<p>O menor número cadastrado foi ${menor}</p>`;
    res.innerHTML = `<p>Somando todos os números temos ${soma}</p>`;
    res.innerHTML = `<p>A media dos valores é ${media}</p>`;
    }
}