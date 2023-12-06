/*
Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade
dela e depois mostre se ela pode ou não votar.
*/
function voting(){
    //16 opcional;
     //18 - 59 obrigatorio;
    // 60 Opcional;

    let vot = document.getElementById('vot');
    let v = Number(vot.value);

    let ano = new Date();
    let anoAtual = ano.getFullYear();
    let nasc = anoAtual - v;
    
    if( nasc >= 18 && nasc <= 59){
        msg.innerHTML = `Você tem <strong>${nasc} </strong>Anos,Voto obrigatório`;
    }else if((nasc >=16 && nasc < 18  ) || nasc >=60) {
        msg.innerHTML = `Você tem <strong>${nasc} </strong>Anos,Voto Opcional`;
    }else{
        msg.innerHTML = `Você tem <strong>${nasc} </strong>Anos, Não vota!`
    }
        
    }


