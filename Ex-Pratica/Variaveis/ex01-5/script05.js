function calcular(){
    let mat = 'Matemática';
    let n1 = document.getElementById('not1');
    let num1 = Number(n1.value);

    let n2 = document.getElementById('not2');
    let num2 = Number(n2.value);
    
    let med = (num1 + num2) / 2;
    
    res.innerHTML =  `A sua media em ${mat} é de ${med}`;
 
}