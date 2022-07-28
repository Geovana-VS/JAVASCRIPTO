var teste = parseInt( prompt('1 - roupas 2 - sapatos 3 - acessórios'))

switch(teste){

    case 1:
        document.write('ESCOLHA UMA PEÇA DE ROUPA')
    break  
    case 2:
        document.write('ESCOLHA UM MODELO DE SAPATO')
    break 
    case 3:
        document.write('ESCOLHA UM ACESSÓRIO')
    break 

    default:
        document.write('DESCULPE ,NÃO IDENTIDIQUEI QUAL É A SUA ESCOLHA ')

}