
function calculadora () {

    const operacao = Number(prompt ('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)'));

    if (!operacao || operacao >= 7){
        alert ('Erro - parâmetros inválida');
        calculadora ();
    }

    else {
         let valor1 = Number (prompt('Insira o primeiro valor:'));
            
         if (!valor1){
            alert ('Erro - parâmetros inválidos')
            calculadora ();
         }
        
        let valor2 = Number (prompt('Insira o segundo valor:'));
        
        if (!valor2){
            alert ('Erro - parâmetros inválidos')
            calculadora ();
    }
        let resultado; 

        function Soma (){
            resultado = valor1 + valor2;
            alert (`${valor1} + ${valor2} = ${resultado}`)
            novaOperacao ();
        }
        function Subtração (){
            resultado = valor1 - valor2;
            alert (`${valor1} - ${valor2} = ${resultado}`)
            novaOperacao();
        }
        function Multiplicação (){
            resultado = valor1 * valor2;
            alert (`${valor1} * ${valor2} = ${resultado}`)
            novaOperacao();
        }
        function divisãoReal (){
            resultado = valor1 / valor2;
            alert (`${valor1} / ${valor2} = ${resultado}`)
            novaOperacao ();
        }
        function divisãoInteira (){
            resultado = valor1 % valor2;
            alert (`${valor1} % ${valor2} = ${resultado}`)
            novaOperacao();
        }
        function potenciação (){
            resultado = valor1 ** valor2;
            alert (`${valor1} ** ${valor2} = ${resultado}`)
            novaOperacao ();
        }
    
        function novaOperacao (){
            let opcao = prompt ('Deseja realizar outra operação?\n 1 - Sim\n 2 - Não');
    
            if (opcao == 1){
                calculadora ();
            }
    
            else if (opcao == 2){
                alert ('Até mais!');
            }
    
            else {
                alert ('Digite uma opção válida!');
                calculadora ();
            }
        }
    
        if (operacao == 1){
            Soma ();
        }
    
        else if (operacao == 2){
            Subtração ();
        }
    
        else if (operacao == 3){
            Multiplicação ();
        }
    
        else if (operacao == 4){
            divisãoReal ();
        }
    
        else if (operacao == 5){
            divisãoInteira ();
        }
    
        else if (operacao ==6){
            potenciação ();
        }
    }
}

calculadora ();
