//  For(inicio;teste;encremento){Execulta bloco se for verdadeiro}
//Modo for é o mais usado entre os programadores;

//Depuração == é um modo de teste do código que executa linha a linha dos codigos, para ver se tem algum erro, Obs:mostra erro de sintaxe, erro de lógica não tem como mostrar
console.log('Vai Começar...')
for(var c =1; c <=4; c++){
    console.log(`${c}`);
}
console.log('FIM!');



var c = 1;
do{ //Faça
    console.log(`Passo ${c}`);
    c++ //Seria o c mais 1
}while(c <= 5)
//Execute o bloco enquanto a condição while for verdadeira


var c = 1;
while(c <= 6){
    console.log(`Passo ${c}`);
    c++ //Seria o c mais 1
}
//Enquanto c for menor ou igual a 6 repita a ação do bloco
