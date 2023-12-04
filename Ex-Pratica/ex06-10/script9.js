function salario(){
    let n1 = document.getElementById('n1');

    let sa = Number(n1.value)
    
    let dol =  3.45;

    let res1 = sa / dol;
    

    msg.innerHTML = `Você ganha R$${sa.toFixed(2)} Reais <br>`;
    msg.innerHTML +=  `Em Dolar Você ganharia US$${res1.toFixed(2)} Dolares <br>`;  
    msg .innerHTML += `Considerando o Dolar ${dol}`;

   

}
