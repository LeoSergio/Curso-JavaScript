function distancia(){
    let n1 = document.querySelector('#n1');
    let num = Number(n1.value);
    let text = (num) + 'M';
    let km = (num / 1000) + 'Km';
    let cm = (num * 1000) + 'Cm';

    msg.innerHTML = (`<p>A distância de: ${text} corresponde a:</p>`);
    msg.innerHTML += (`${km} </br>`);
    msg.innerHTML += (`${cm}`);
    
}