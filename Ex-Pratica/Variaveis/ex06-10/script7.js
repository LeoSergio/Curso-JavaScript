function real(){
    let n1 = document.querySelector('#n1');
    let num = Number(n1.value);

    let do2 = num * 2;
    let ter = num / 3;

    msg.innerHTML = `O dobro de ${num} é ${do2} e a terça parte de ${num} é ${ter}`;
   
}