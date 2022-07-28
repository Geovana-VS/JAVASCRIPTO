var n1 = ''
var n2 = ''
var operacao = '' 
var result_final = ''
var decimal = ''

var resultados = Array()
var i = 0



function inserirNumero(valor){
   if (operacao == ''){
      n1 = document.getElementById('visor').innerHTML+=valor
   }else{
      n2 = document.getElementById('visor').innerHTML+=valor
      
  }
}
  
function colocarOperacao(opr){
  document.getElementById('visor').innerHTML=''
  if (opr === '+' ||  opr === '-' || opr === '/' || opr === '*' ){
     operacao = opr
  }
}


function adicionarDecimal(){
  decimal = '.'
  return decimal
  
}


function processarResultado(){
   result_final = eval(n1 + operacao + n2)
   document.getElementById('visor').innerHTML = result_final
   resultados.unshift(result_final)
   n1 = result_final
  

}


function limparTela(){
  document.getElementById('visor').innerHTML = ''
  n1 = ''
  n2 = ''
  operacao = ''
  result_final = ''
}

function exibirResultados(){
  document.getElementById('visor').innerHTML=(resultados[i]);
  i++
 }






  
  
  
  

  
  
  
  
  
  
  
  
  
  