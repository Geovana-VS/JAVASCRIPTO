/*var data = new Date()

document.write(data.getu() + '/' + (data.getMonth()+1) +'/'+ data.getFullYear())
document.write('<hr />')
document.write(data.toString())*/


var data = new Date()
document.write(data.getUTCDate() + '/' + (data.getMonth()+1) +'/'+ data.getFullYear())
document.write('<br/>')
document.write('<hr />')

// add ou remov dias da data 

document.write(data.toString()) // exibindo descrição da tata e horário completo
document.write('<hr />')
data.setDate(data.getUTCDate()+1)
document.write(data.toString() +' (Adicioanando um dia na data) ')
document.write('<hr />')
data.setDate(data.getUTCDate()-2)
document.write(data.toString() +' (Removendo 2 dias na data) ')
document.write('<hr />')
data.setMonth(data.getMonth()+1)
document.write(data.toString() +' (Adicioanando 1 mês na data) ')
document.write('<hr />')
data.setFullYear(data.getFullYear()+1)
document.write(data.toString() +' (Adicioanando 1 ano na data) ')


document.write('<hr />')

//Achar a diferença de dias entre duas datas

var data1 = new Date(2022,4,12)//Data 1
var data2 = new Date(2022,4,28)//Data 2

document.write(data1.toDateString())//Exibindo transcrição da data 1
document.write('<br />')
document.write(data2.toDateString())//Exibindo transcrição da data 2
document.write('<br /> <br />') 
document.write(data1.getTime())// Por padrão, getTime faz a contagem em milisegundos desde 1/1970 até a data solicidada, no caso é ate data 1
document.write('<br />')
document.write(data2.getTime())
document.write('<br /> <br />')

//Agora precisaos achar a diferenca de milisegundos  entre as duas datas e depois converter para dias
var mil1= data1.getTime()
var mil2= data2.getTime()


milTot =  mil2 - mil1
document.write(milTot)
document.write('<br />')

var segTot = milTot/1000 
document.write(segTot)
document.write('<br />')

var minTot = segTot/60
document.write(minTot)
document.write('<br />')

var horTot = minTot/60
document.write('Faltam '+horTot+' horas para a BAOBÁ')
document.write('<br />')

var diaTot = horTot/24
document.write('Faltam '+diaTot+' para a BAOBÁ')
document.write('<br />')


























