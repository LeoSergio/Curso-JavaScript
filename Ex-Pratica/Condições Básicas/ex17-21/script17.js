/*
Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse
80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba
o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.
*/
function speed(){
    let vel = document.getElementById('vel');
    let velo = Number(vel.value);
    let velm = 80;
    let mu = 5;
    let mut = 5 * (velo - velm);
    if(velo > velm){
        msg.innerHTML = `Sua velocidade ultrapassa o limite estabelecido pela lei de Trânsito que é <strong>${velm}Km/h</strong>, sendo sua velocidade <strong>${velo}Km/h</strong> por tanto você está mutado no valor de <strong>${mut.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong> <br>`
        msg.innerHTML += `<input type="button" value="Pagar Muta">`
    }else{
        msg.innerHTML = `Você está liberado, use sempre o sinto de Segurança.`
    }
}