function car(){
    let km = document.getElementById('km');
    let kmt = Number(km.value);
    let km$ = 0.20;

    let day = document.querySelector('#day');
    let qday = Number(day.value);
    let qday$ = 90.0;

    let kmr = kmt * km$;
    let qdayr = qday * qday$;

    let res = kmr + qdayr;

    msg.innerHTML = `Quantidade pago por KM é de:  <strong>${kmr.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong> <br>`;

    msg.innerHTML += `Quantidade a ser pago por dia de uso: <strong>${qdayr.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong> <br>`;

    msg.innerHTML += `O valor Total que deve ser Pago é de: <strong>${res.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong> <br>`;
    msg.innerHTML += `<input type="button" value="Pagar" onclick="pagar()">`;
  

    
}
function pagar(){
    alert(`Pagamento Realizado com sucesso, obrigado!`);
}
