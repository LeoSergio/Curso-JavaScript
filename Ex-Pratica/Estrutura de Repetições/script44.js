/*
Crie um algoritmo que leia o valor inicial da contagem, o valor final e o
incremento, mostrando em seguida todos os valores no intervalo:
Ex: Digite o primeiro Valor: 3
Digite o último Valor: 10
Digite o incremento: 2
Contagem: 3 5 7 9 Acabou!
*/
function loop(){
    let num1 = document.getElementById('num1');
    let inicio = Number(num1.value);
    let num2 = document.querySelector('#num2');
    let final = Number(num2.value);
    let incre = document.querySelector('#incre');
    let ct1 = Number(incre.value);

    if(inicio<=final){
        for(let i=inicio; i<=final; i+=ct1){
            let ct = i; 
            res.innerHTML += `${ct} ,`;
         }  
             res.innerHTML += 'FIM';
             
    }else if(inicio>final){
        for(let i=inicio; i>=final; i-=ct1){
            let ct = i;
            res.innerHTML += `${ct} ,`;

        }
        res.innerHTML += `FIM` 
    }
    
        
}