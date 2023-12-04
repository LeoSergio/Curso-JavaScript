function up(){
    let sa = document.querySelector('#s1');
    let sat = Number(s1.value);

    let ac = 0.15;
    let ns = sat + (sat * ac);

    let res = ns;
    
    msg.innerHTML = `O seu Antigo salário era ${sat.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} com seu novo aumento ficou de ${res.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}, Continue com o trabalho duro que você vai longe.`
}