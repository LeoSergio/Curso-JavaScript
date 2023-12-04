function pintura(){
    let la = document.getElementById('l1');
    let lar1 = Number(la.value);

    let alt = document.querySelector('input#alt1');
    let altr = Number(alt.value);

    let area = (lar1 * altr); //area a ser pintada;


    let tinta = Math.sqrt(area); //raiz Quadrada
    let qti = area / tinta ;
    let res = qti;

    msg.innerHTML = ` a Largura é de ${lar1} Metros e a Altura é de ${altr} Metros, sendo a Quantidade de tinta usada de ${qti.toFixed(2)}litros`
    
}

//1l = 2m²