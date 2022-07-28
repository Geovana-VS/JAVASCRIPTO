var num1 = parseInt(prompt('Digite um número:'))
var num2 = parseInt(prompt('Digite um número:'))
var operacao = prompt('Digite SOMA se quiser somar os numeros ou SUBTRAI se querser subtrair ')


function calcularNumeros(num1,num2,operacao){
 
   if (operacao == 'soma'){
       var resultado = num1+num2
   }else{
        
        var resultado = num1-num2
   }
   return document.write('O resultado do calculo é '+resultado) 
}


calcularNumeros()
