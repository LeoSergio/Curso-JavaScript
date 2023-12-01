function calcular(){
    let n1 = document.querySelector('input#n1');
    let num = Math.trunc(n1.value);
    
    let ant = num-1;
    let suc = num +1 ;
    msg.innerHTML = `o Antecessor de <strong>${num}</strong> é ${ant} e o Sucessor é ${suc}`;
}