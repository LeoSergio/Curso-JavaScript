/*
Faça um algoritmo que pergunte a distância que um passageiro deseja
percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para
viagens até 200Km e R$0.45 para viagens mais longas.
*/
function destiny(){
    let km = document.querySelector('#km');
    let dest = Number(km.value);
    let km200 = dest * 0.50;
    let km201 = dest * 0.45;

    if(dest <= 200){
        msg.innerHTML = `A viagem fica <strong>${km200.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>`;
    }else{
        msg.innerHTML =`A viagem fica de <strong>${km201.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </strong>`
    }
}