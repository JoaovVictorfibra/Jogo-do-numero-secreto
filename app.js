let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}

function exibirTextoInicial() {
    exibirTextoNaTela("h1", "Jogo do numero secreto");
    exibirTextoNaTela("p", "Escolha um numero entre 1 e 10");
}

exibirTextoInicial();
function verificarChute() {
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Parabens!");
        let palavraTentativas = tentativa > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = ` Voce descobriu o numero secreto com ${tentativa} ${palavraTentativas}!`;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute < numeroSecreto) {
            exibirTextoNaTela("p", `O numero secreto e maior que ${chute}`);
        } else {
            exibirTextoNaTela("p", `O numero secreto e menor que ${chute}`);
        }
        tentativa++;
        limparCampo();
    }
}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    exibirTextoInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
