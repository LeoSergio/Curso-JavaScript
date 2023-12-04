function promo(){
    let p1 = document.getElementById('p1');
    let pt = Number(p1.value);

    let des = pt * 0.05;
    let res = pt-des;
    let pp = res;
    
    msg.innerHTML = `O seu desconto foi de ${des.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} e o total a ser pago é de ${pp.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} `;
}