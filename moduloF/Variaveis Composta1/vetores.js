let valores = [8,1,7,4,2,9];
valores.sort()
console.log(valores); // maneira tradicional de mostrar os valores do array;
for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
} //Maneira tradicional de mostrar o percurso do vetor em Js


for(let pos in valores){//Maneira simplicada de percurso de array e object obs: só funciona para esses dois casos.
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}
// ler assim : "para(for) cada posição(pos = variável composta) em(in)  valores"