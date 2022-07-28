var nome = prompt('Digite o seu nome: ')
var alt = parseInt(prompt(nome+', digite a sua altura em cm:'))
var peso = parseFloat(prompt(nome+', agora digite o seu peso'))

var aut_convertida = (alt/100)



var imc = peso / (aut_convertida**2) 

if (imc < 16){
    document.write('Baixo peso muito grave') 
}else
   if (imc > 16 && imc < 16.99){
    document.write('Baixo peso  grave') 
   }else
      if(imc > 17 && imc < 18.49){
        document.write('Baixo peso  ')
      }else
         if (imc > 18.50 && imc < 24.99){
            document.write('Peso normal')
         }else
            if (imc > 25 && imc <29.99){
                document.write('sobrepeso')
            }else
               if  (imc > 30 && imc < 34.99){
                document.write('obesidade grau I')
               }else
                  if (imc > 35 && imc < 30.99){
                    document.write('obesidade grau II')
                  } else 
                     if (imc > 40 ){
                        document.write('obesidade grau III') 
                     }




