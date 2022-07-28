var c = parseFloat(prompt('Digite o comprimento do terreno  '))
var l = parseFloat(prompt('Digite a largura do terreno '))

function calcularArea(comprimento,largura){
   var area = comprimento*largura

   return area
}

var area = calcularArea(c,l)

document.write('O terreno tem '+ area +' m²')