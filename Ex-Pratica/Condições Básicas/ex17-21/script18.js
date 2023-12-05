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

    if( v >= 18 && v <= 59){
        msg.innerHTML = `Voto obrigatório`;
    }else if((v < 18 && v >=16) || v >=60) {
        msg.innerHTML = `Voto Opcional`;
    }else{
        msg.innerHTML = `Não vota`
    }
        
    }


