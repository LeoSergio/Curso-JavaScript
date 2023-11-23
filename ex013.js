
let agora = new Date();
let diaSem = agora.getDay();

switch(diaSem){
    case 0:
        console.log(`Domigo`);
            break
    case 1:
        console.log(`SEGUNDA`);
            break
    case 2:
        console.log(`TERÇA`);
            break
    case 3:
        console.log(`QUARTA`);
            break
    case 4:
        console.log(`QUINTA`);
            break
    case 5:
        console.log(`SEXTA`);
            break
    case 6:
        console.log(`SABADO`);
            break
    default:
        break
}
/*Condições Multiplas
    Usados geralmente em casos especificos e de muita utilidade;
    debaixo de cada bloco tem um BREAK que é obrigatório.
    sintaxe:
switch (expressão){
    case valor 1: 
        bloco1

    case valor 2:
        bloco2

    case valor 3:
        bloco3

    default:
}

vai avaliar o que se pede e executar o que está pedindo.Ex: pediu algo q estar na case 2, então vai ser executado na case 2.

*/