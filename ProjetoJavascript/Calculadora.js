
    function calcular(){
    const escolha = Number(prompt ('Caluladora\n\nQual operação deseja fazer:\n1- Soma\n2- Subtração\n3- Multiplicação\n4- Divisão\n5-Divisão Inteira\n6- Potenciação'));
    
    let num1 = Number(prompt ('Digite o primeiro número: '));
    
    let num2 = Number(prompt ('Digite o segundo número: '));
    let resultado;
    
    function soma(){
        resultado = num1 + num2;
        alert(`${num1} + ${num2} = ${resultado}`);
    }
    function subtracao(){
        resultado = num1 - num2;
        alert(`${num1} - ${num2} = ${resultado}`);
    }
    function multiplicacao(){
        resultado = num1 * num2;
        alert(`${num1} * ${num2} = ${resultado}`);
    }
    function divisao(){
        resultado = num1 / num2;
        alert(`${num1} / ${num2} = ${resultado}`);
    }
    function restodiv(){
        resultado = num1 % num2;
        alert(`${num1} % ${num2} = ${resultado}`);
    }
    function potencia(){
        resultado = num1 ** num2;
        alert(`${num1} ** ${num2} = ${resultado}`);
    }
    function CalcularNovamente(){
        let escolher = prompt('Deseja calcular novamente? [s/n]');
        if(escolher == "s"){
            calcular();
        }
        else if(escolher == "n"){
            alert('Até mais!');
        }else{
            alert('Escolha uma opção válida!');
            CalcularNovamente();
        }
    }


    switch (escolha){
        case 1:
            soma();
            CalcularNovamente();
            break;
        case 2:
            subtracao();
            CalcularNovamente();
            break;
        case 3:
            multiplicacao();
            CalcularNovamente();
            break;
        case 4:
            divisao();
            CalcularNovamente();
            break;
        case 5:
            restodiv();
            CalcularNovamente();
            break;
        case 6:
            potencia();
            CalcularNovamente();
            break;
    }
   
}
    
    calcular();      
