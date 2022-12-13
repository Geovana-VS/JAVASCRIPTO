var altura = 0;
var largura = 0;
var tempo = 13;
var vidas = 1;
criarBoso_tempo = 1500;// variavel criada para receber  um valor que sera na função que ger a imagem do inseto  em um determinado tempo, passando essa var ela acaba atuando em cima do valor que é atribuido a ela conformos níveis desejados 

var nivel = window.location.search // retorna a querystring que esta após o interrogação 
nivel = nivel.replace('?', '')// replace encontra em uma variavel o ('CARACTER DESEJADO','E SUBISTITUI ELE PELO QUE ESTA AQUI)
//criei uma função que atribui às vars altura e largura as dimençoes em alt e lar recuperadas do  Browser Object model com o obj window 



if (nivel === 'facil') {
    criarBoso_tempo = 1500;
} else if (nivel === 'medio') {
    criarBoso_tempo = 1000;
} else if (nivel === 'dificil') {
    criarBoso_tempo = 750;
}





// chamamos essa funcão  tando aqui no scrip coMo na tag <body atraves do "onrisize =function name "></body> 
function redmencionarTela() {
    altura = window.innerHeight
    largura = window.innerWidth

}

redmencionarTela()


function posicaoRandomicaBoso() {
    //redmencionarTela();

    if (document.getElementById('boso')) {
        document.getElementById('boso').remove()
        document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
        vidas++

    }
    if (vidas > 5) {
        window.location.href = 'fim_de_jogo.html'
    }



    var positionx = Math.floor(Math.random() * largura) - 100/*Math.randon gera valores aleatorios entre 0 1 1*/
    var positiony = Math.floor(Math.random() * altura) - 100 /*Math.floor areedonda valores para bauixo deixando de utilizar casas decimais quando é de uso desnecessario*/

    if (positionx < 0) {
        positionx = 10
    }

    if (positiony < 0) {
        positiony = 10
    }


    if (positiony > altura) {
        console.log('log1', positiony);
        positiony = (altura - 300)
        console.log('log2', positiony);

    }

    if (positionx > largura) {
        positionx = (largura - 300)
    }



    //criando um elemento html

    var boso = document.createElement("img")/* através do DOM utilizando "docment.crieateElemente", conseguimos atraves do js criar uma elemento html*/
    boso.src = "imagens/boso1.png"
    boso.className = gerarTamanhoAleatorio() + ' ' + GerarLado()
    /*ao concatenar dois retornos de dunções é necessario que exiata um espaço entre  as chamadas das funções para que o interpretador saiba que são classes  distintas */
    boso.style.top = positiony + "px"
    boso.style.left = positionx + "px"
    boso.style.position = "absolute"
    boso.id = "boso"
    boso.onclick = onClickNoBoso;
    document.body.appendChild(boso)
    sonarInseto();



    //GerarLado()
    console.log(GerarLado())
    console.log(`O bozo foi gerado na posição  x ${positionx}px :   y${positiony}px`);
    //document.write(`A tela tem o tamanho alt ${altura}   larg:px : ${largura}px`);


}

var cronometro = setInterval(function () {
    //fluxo de vitoria
    if (tempo < 0) {
        clearInterval(cronometro);
        clearInterval(criarBoso);
        window.location.href = 'vitoria.html'
    
    } else {
        document.getElementById('cronometro').innerHTML = tempo
        tempo -= 1;
    }

}, 1000)

function sonarTapa() {
    var audio = new Audio('sons/tapa.mp3');
    audio.addEventListener('canplaythrough', function () {
        audio.play();
    });

}
function sonarInseto(){
    var audio = new Audio('sons/bizz_bizz.mp3');
    audio.addEventListener('canplaythrough', function () {
        audio.play();
    });
}

function sonarVitoria(){
    var audio = new Audio('sons/aplausos.mp3');
    audio.addEventListener('canplaythrough', function () {
        audio.play();
    });
}






function onClickNoBoso() {
    boso.src = "imagens/boso_susto.png";
    //boso.className = gerarLadoSusto();
    sonarTapa();


    setTimeout(function () {
        document.getElementById('boso').remove();
    }, 300)
}



function gerarTamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    console.log("gerou" + classe)

    switch (classe) {
        case 0:
            return "boso0"

        case 1:
            return "boso1"
        case 2:
            return "boso2"

    }

}

function GerarLado() {
    var classe = Math.floor(Math.random() * 2)


    switch (classe) {
        case 0:
            return "ladoE"

        case 1:
            return "ladoD"


    }
}

function gerarLadoSusto() {
    var classe = Math.floor(Math.random() * 2)


    switch (classe) {
        case 0:
            return "susto_ladoE"

        case 1:
            return "susto_ladoD"

    }
}



