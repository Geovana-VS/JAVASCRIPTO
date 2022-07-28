var a = 10
var b = 20 
var c = null


document.write("var a ="+a+"<br>var b ="+b+"<br>var c ="+c+"<br>")

c = a 
a=b
b = c
c = null

document.write("Troca de conteúdos<br>")
document.write("var a ="+a+"<br>var b ="+b+"<br>var c ="+c)