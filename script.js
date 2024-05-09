"use strict";
// script.ts
// Declaração de variáveis globais
// const focoBtn: HTMLElement | null = document.querySelector('.app__card-button--foco');
const focoBtn = document.querySelector('.app__card-button--foco');
const shortBtn = document.querySelector('.app__card-button--short');
const longBtn = document.querySelector('.app__card-button--long');
const html = document.querySelector("html");
const banner = document.querySelector(".app__section-banner-container .app__image");
const titulo = document.querySelector(".app__title");
const timer = document.querySelector("#timer");
const startPauseBtn = document.querySelector("#start-pause");
const startPauseBtnText = document.querySelector("#start-pause span");
const startPauseBtnIcon = document.querySelector(".app__card-primary-butto-icon");
const buttons = document.querySelectorAll('.app__card-button');
const musicaFocoInput = document.querySelector('#alternar-musica');
const audioPlay = new Audio('./sons/play.wav');
const audioPause = new Audio('./sons/pause.mp3');
const musica = new Audio('./sons/luna-rise-part-one.mp3');
musica.loop = true;
let intervaloId = null;
let tempoDecorridoEmSegundos = 25;
mostrarTempo();
function alterarBanner(contexto) {
    if (banner)
        banner.setAttribute('src', `./imagens/${contexto}.png`);
    switch (contexto) {
        case "foco":
            if (titulo)
                titulo.innerHTML = `
                Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `;
            break;
        case "short-break":
            if (titulo)
                titulo.innerHTML = `
                Que tal dar uma respirada? <br>
                <strong class="app__title-strong">Faça uma pausa curta.</strong>
            `;
            break;
        case "long-break":
            if (titulo)
                titulo.innerHTML = `
                Hora de voltar à superfície. <br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `;
            break;
        default:
            break;
    }
}
function alterarContexto(contexto) {
    if (html)
        html.setAttribute('data-contexto', contexto);
    zerar();
    mostrarTempo();
    alterarBanner(contexto);
    buttons.forEach(function (button) {
        button.classList.remove('active');
    });
}
focoBtn === null || focoBtn === void 0 ? void 0 : focoBtn.addEventListener("click", () => {
    tempoDecorridoEmSegundos = 25;
    alterarContexto("foco");
    focoBtn === null || focoBtn === void 0 ? void 0 : focoBtn.classList.add('active');
});
shortBtn === null || shortBtn === void 0 ? void 0 : shortBtn.addEventListener("click", () => {
    tempoDecorridoEmSegundos = 5;
    alterarContexto("short-break");
    shortBtn === null || shortBtn === void 0 ? void 0 : shortBtn.classList.add('active');
});
longBtn === null || longBtn === void 0 ? void 0 : longBtn.addEventListener("click", () => {
    tempoDecorridoEmSegundos = 15;
    alterarContexto("long-break");
    longBtn === null || longBtn === void 0 ? void 0 : longBtn.classList.add('active');
});
startPauseBtn === null || startPauseBtn === void 0 ? void 0 : startPauseBtn.addEventListener("click", iniciarOuPausar);
musicaFocoInput === null || musicaFocoInput === void 0 ? void 0 : musicaFocoInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play();
    }
    else {
        musica.pause();
    }
});
const contagemRegressiva = () => {
    if (tempoDecorridoEmSegundos <= 0) {
        zerar();
        const focoAtivo = (html === null || html === void 0 ? void 0 : html.getAttribute('data-contexto')) === 'foco';
        if (focoAtivo) {
            var event = new CustomEvent("TarefaFinalizada", {
                detail: {
                    message: "A tarefa foi concluída com sucesso!",
                    time: new Date(),
                },
                bubbles: true,
                cancelable: true
            });
            document.dispatchEvent(event);
            tempoDecorridoEmSegundos = 25;
            mostrarTempo();
        }
        return;
    }
    tempoDecorridoEmSegundos -= 1;
    mostrarTempo();
};
function iniciarOuPausar() {
    if (intervaloId) {
        audioPause.play();
        zerar();
        return;
    }
    audioPlay.play();
    startPauseBtnText.textContent = "Pausar";
    startPauseBtnIcon === null || startPauseBtnIcon === void 0 ? void 0 : startPauseBtnIcon.setAttribute('src', `./imagens/pause.png`);
    intervaloId = setInterval(contagemRegressiva, 1000);
}
function zerar() {
    clearInterval(intervaloId);
    startPauseBtnIcon === null || startPauseBtnIcon === void 0 ? void 0 : startPauseBtnIcon.setAttribute('src', `./imagens/play_arrow.png`);
    startPauseBtnText.textContent = "Começar";
    intervaloId = null;
}
function mostrarTempo() {
    const data = new Date(tempoDecorridoEmSegundos * 1000);
    const tempoFormatado = data.toLocaleTimeString('pt-Br', { minute: '2-digit', second: '2-digit' });
    timer.innerHTML = `${tempoFormatado}`;
}
