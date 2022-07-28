var callbackSucesso = function(titulo,descricao){
    document.write('<h1>'+titulo+'</h1>')
    document.write('<hr/>')
    document.write('<h6>'+descricao+'</h6>')

}

var callbackErro = function(erro){
   document.write('<h3> Ops! :( '+erro+'</h3>')
   

}

/*Nessa primeira parte, criamos duas varáveis que recebem funcões
 uma pra  caso sucesso ao exibir o artigo e outra para caso tehauma erro a exibição.
Nelas  são aplicados conteudos para exibição tanto de sucesso qunro de erro
São duas várieves que serão futuramente passadas como parametro para a funcão principal da exibição do artigo Técnica conhecida como wraper(encapsula funções para serem usadas e funções de callback funções que recebe por parametro outras funçoes)*/





function exibirArtigo(id,callbackSucesso,callbackErro){
    if (false){
       callbackSucesso('Funções de Callback em JS','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')
    }else{
        callbackErro('Erro ao recuperar o artigo')
    }
}

/* Nessa segunda parte é criada ua função para a exibição de um artigo
 passando´se por parametro um ID que sera referenre ao ID do artido e duas váriaves co funcoes wraper (caso por algum motivo o artigo nao seja encontrado).
 Depois é feita a lógica para as duas possibilidades aribuíndo  valores par exibição conforme cada caso*/



exibirArtigo(1,callbackSucesso,callbackErro)