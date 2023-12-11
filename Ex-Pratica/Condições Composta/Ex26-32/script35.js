/*
Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O
aluguel de um carro custa R$90 por dia para carro popular e R$150 por dia para
carro de luxo. Além disso, o cliente paga por Km percorrido. Faça um programa
que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e
quantos Km foram percorridos. No final mostre o preço a ser pago de acordo com a
tabela a seguir:
- Carros populares (aluguel de R$90 por dia)
- Até 100Km percorridos: R$0,20 por Km
- Acima de 100Km percorridos: R$0,10 por Km
- Carros de luxo (aluguel de R$150 por dia)
- Até 200Km percorridos: R$0,30 por Km
- Acima de 200Km percorridos: R$0,25 por Km
*/
function car(){
    let car = document.querySelector('#car');
    let carType = car.value;
    let alu1 = document.querySelector('#alu1');
    let days = Number(alu1.value);
    let km = document.getElementById('km');
    let kmP = Number(km.value);

    let carPop = 90;
    let pay100km = kmP*0.20;
    let pay200km = kmP*0.10;
    let carL = 150;
    let carPkm = kmP*0.30;
    let carP200km = kmP*0.25;

    if(carType == 'popular'&& kmP <=100){
        let pay = pay100km + (days*carPop);
        msg.innerHTML = `Você vai pagar${pay}`

    } else if(carType == 'popular'&& kmP>100){
        let pay =  pay200km + (days*carPop);
        msg.innerHTML = `Você vai pagar${pay}`
    }
    if(carType == 'luxo'&& kmP<=200){
        let pay = carPkm + (days*carL);
        msg.innerHTML = `Você vai pagar${pay}`
        
    }else if(carType == 'luxo'&& kmP>200){
        let pay = carP200km + (days*carL);
        msg.innerHTML = `Você vai pagar${pay}`
    }
}
