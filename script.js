import {PALAVRAS_RUINS} from "./palavrasruins.js";

const botaoMostraPalavras = document.querySelector ('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click' , mostraPalavrasChave)

function mostraPalavrasChave () {
    const texto = document.querySelector ('#entrada-de-texto').value;
    const camporesultado = document.querySelector ('#resultado-palavrachave')
    const palavrasChave = processaTexto (texto);

    camporesultado.textContent = palavrasChave.join(",");
}
