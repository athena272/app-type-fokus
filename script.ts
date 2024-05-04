// script.ts

// Declaração de variáveis globais
const focoBtn: HTMLElement | null = document.querySelector('.app__card-button--foco');
const shortBtn: HTMLElement | null = document.querySelector('.app__card-button--short');
const longBtn: HTMLElement | null = document.querySelector('.app__card-button--long');
const html: HTMLElement | null = document.querySelector("html");

const banner: HTMLImageElement | null = document.querySelector(".app__section-banner-container .app__image");

const titulo: HTMLElement | null = document.querySelector(".app__title");

const timer: HTMLElement | null = document.querySelector("#timer");
const startPauseBtn: HTMLElement | null = document.querySelector("#start-pause");
const startPauseBtnText: HTMLElement | null = document.querySelector("#start-pause span");
const startPauseBtnIcon: HTMLImageElement | null = document.querySelector(".app__card-primary-butto-icon");

const buttons: NodeListOf<HTMLElement> = document.querySelectorAll('.app__card-button');
const musicaFocoInput: HTMLInputElement | null = document.querySelector('#alternar-musica');

const audioPlay: HTMLAudioElement = new Audio('./sons/play.wav');
const audioPause: HTMLAudioElement = new Audio('./sons/pause.mp3');
const musica: HTMLAudioElement = new Audio('./sons/luna-rise-part-one.mp3');
musica.loop = true;

let intervaloId: number | null = null;
let tempoDecorridoEmSegundos: number = 25;
mostrarTempo();

function alterarBanner(contexto: string): void {
    if (banner) banner.setAttribute('src', `./imagens/${contexto}.png`);

    switch (contexto) {
        case "foco":
            if (titulo) titulo.innerHTML = `
                Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `;
            break;
        case "short-break":
            if (titulo) titulo.innerHTML = `
                Que tal dar uma respirada? <br>
                <strong class="app__title-strong">Faça uma pausa curta.</strong>
            `;
            break;
        case "long-break":
            if (titulo) titulo.innerHTML = `
                Hora de voltar à superfície. <br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `;
            break;

        default:
            break;
    }
}

function alterarContexto(contexto: string): void {
    if (html) html.setAttribute('data-contexto', contexto);
    zerar();
    mostrarTempo();
    alterarBanner(contexto);
    buttons.forEach(function (button) {
        button.classList.remove('active');
    });
}

focoBtn?.addEventListener("click", () => {
    tempoDecorridoEmSegundos = 25;
    alterarContexto("foco");
    focoBtn?.classList.add('active');
});

shortBtn?.addEventListener("click", () => {
    tempoDecorridoEmSegundos = 5;
    alterarContexto("short-break");
    shortBtn?.classList.add('active');
});

longBtn?.addEventListener("click", () => {
    tempoDecorridoEmSegundos = 15;
    alterarContexto("long-break");
    longBtn?.classList.add('active');
});

startPauseBtn?.addEventListener("click", iniciarOuPausar);

musicaFocoInput?.addEventListener('change', () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
});

const contagemRegressiva = (): void => {
    if (tempoDecorridoEmSegundos <= 0) {
        zerar();
        const focoAtivo = html?.getAttribute('data-contexto') === 'foco';
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

function iniciarOuPausar(): void {
    if (intervaloId) {
        audioPause.play();
        zerar();
        return;
    }
    audioPlay.play();
    startPauseBtnText!.textContent = "Pausar";
    startPauseBtnIcon?.setAttribute('src', `./imagens/pause.png`);
    intervaloId = setInterval(contagemRegressiva, 1000);
}

function zerar(): void {
    clearInterval(intervaloId as number);
    startPauseBtnIcon?.setAttribute('src', `./imagens/play_arrow.png`);
    startPauseBtnText!.textContent = "Começar";
    intervaloId = null;
}

function mostrarTempo(): void {
    const data = new Date(tempoDecorridoEmSegundos * 1000);
    const tempoFormatado = data.toLocaleTimeString('pt-Br', { minute: '2-digit', second: '2-digit' });
    timer!.innerHTML = `${tempoFormatado}`;
}
