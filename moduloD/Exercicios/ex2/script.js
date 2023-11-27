function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert(`[ERRO] Verifique os dados e tente novamente`);
    }else{
        var fsex = document.getElementsByName(`sexo`);
        var idade = ano - Number(fano.value);
        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem';
            if(idade >=0 && idade <=10){
                img.setAttribute(`src`,`foto-bebe-m.png`);
            }else if(idade < 21){
                img.setAttribute(`src`,`foto-adolescente-m.png`);
            }else if(idade < 50 ){
                img.setAttribute(`src`,`foto-adulto-m.png`);
            }else{
                img.setAttribute(`src`,`foto-idoso-m.png`);
            }
        } else{
            genero = 'mulher';
            if(idade >=0 && idade <=10){
                img.setAttribute(`src`,`foto-bebe-f.png`);
            }else if(idade < 21){
                img.setAttribute(`src`,`foto-adolescente-f.png`);
            }else if(idade < 50 ){
                img.setAttribute(`src`,`foto-adulto-f.png`);
            }else{
                img.setAttribute(`src`,`foto-idoso-f.png`);
            }
        }

        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}