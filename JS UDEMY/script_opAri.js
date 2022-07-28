var n1 = parseInt(prompt('Digite um número'))
var n2 = parseInt(prompt('Digite outro número'))
var op = parseInt(prompt('O que deseja fazer com os números:  1 -  somar 2 - subtrair 3 - multiplicar 4 - saber o resto da divisão  '))


switch (op){

     case 1:
         var operacao = "soma"
         var resultado = n1 + n2
         document.write('O resultado da'+operacao+' é '+resultado+'<br/>')
         var op1 = parseInt(prompt(' deseja:  1 - incrementar o resultado / 2 - decrementar o resulrado'))
         if (op1 == 1){
              var decinc = "incrementação"
              var resp_op1 =  (++resultado)
         }else{
            var decinc = "decrementação"
            var resp_op1 = (--resultado)
        }
         
         document.write("O resultado final com a "+decinc+" é = "+ resp_op1)
        break    


     case 2:
        var operacao = "subtração"
         var resultado = n1 - n2
         document.write('O resultado da'+operacao+' é '+resultado+'<br/>')
         var op1 = parseInt(prompt(' deseja:  1 - incrementar o resultado <br/> 2 - decrementar o resulrado'))
         if (op1 == 1){
            var decinc = "incrementação"
            var resp_op1 =  (++resultado)
       }else{
          var decinc = "decrementação"
          var resp_op1 = (--resultado)
      }
       
       document.write("O resultado final com a "+decinc+" é = "+ resp_op1)
      break   
   break

     case 3:
         var operacao = "multiplicação"
         var resultado = n1 * n2
         document.write('O resultado da'+operacao+' é '+resultado+'<br/>')
         var op1 = parseInt(prompt(' deseja:  1 - incrementar o resultado / 2 - decrementar o resulrado'))
         if (op1 == 1){
            var decinc = "incrementação"
            var resp_op1 =  (++resultado)
         }else{
            var decinc = "decrementação"
            var resp_op1 = (--resultado)
      }
       
       document.write("O resultado final com a "+decinc+" é = "+ resp_op1)
      break   
   


     case 4:
         var operacao = "resto da divisão"
         var resultado = n1 % n2
         document.write('O resultado do '+operacao+' é '+resultado+'<br/>')
         var op1 = parseInt(prompt(' deseja:  1 - incrementar o resultado / 2 - decrementar o resulrado'))
         if (op1 == 1){
            var decinc = "incrementação"
            var resp_op1 =  (++resultado)
       }else{
          var decinc = "decrementação"
          var resp_op1 = (--resultado)
      }
       
       document.write("O resultado final com a "+decinc+" é = "+ resp_op1)
      break   
   

     default:
         document.write('Não identidicamos sua opção')
}
