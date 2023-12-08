/*
Crie um jogo de JoKenPo (Pedra-Papel-Tesoura)
jogada:
pedra vs tesoura = pedra;
pedra vs papel=papel;
pedra vs pedra= empate;

papel vs pedra =
papel vs tesoura =
papel vs papel = 


*/
function gamelis(){
    let j1 = document.getElementById('j1');
    let jog1 = j1.value;
    let j2 = document.getElementById('j2');
    let jog2 = j2.value;

    if(jog1 == 'pedra' && jog2 == 'tesoura'){
        msg.innerHTML = `Jogador 1 Ganhou`;
    }else if(jog2 == 'pedra' && jog1 == 'tesoura'){
        msg.innerHTML = `Jogador 2 Ganhou`;
    }

    if(jog1 == 'papel' && jog2 == 'pedra'){
        msg.innerHTML = `Jogador 1 Ganhou`;
    }else if(jog2 == 'papel' && jog1=='pedra'){
        msg.innerHTML = `Jogador 2 Ganhou`;
    }

    if(jog1 == 'tesoura'&& jog2 == 'papel'){
        msg.innerHTML = `Jogador 1 Ganhou`;
    }else if(jog2=='tesoura' && jog1 =='papel'){
        msg.innerHTML = `Jogador 2 Ganhou`;
    }
      
    
    if( jog1 == jog2 && jog2 ==jog1) {
        msg.innerHTML = `Empate, Jogue de Novo`;
    }
    }
