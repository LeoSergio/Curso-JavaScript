/*
Faça um algoritmo que pergunte ao usuário um número inteiro e positivo
qualquer e mostre uma contagem até esse valor:
Ex: Digite um valor: 35
Contagem: 1 2 3 4 5 6 7 ... 33 34 35 Acabou!
*/
function loop(){
    let num1 = document.getElementById('num1');
    let ct = Number(num1.value);
    
    for(let i =0; i<=ct;i++){
        
        res.innerHTML += `Número:`+i+'<br>';
    }
        res.innerHTML += `FIM`;
    
}