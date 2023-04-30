let meuAudio = document.getElementById("audio");
meuAudio.volume = 0.1; // Define o volume do áudio para 50%

const mudarTema = document.getElementById('mudar-tema')

function trocarTema() {
    document.getElementById('container').classList.toggle('container-light')
    document.getElementById('content').classList.toggle('content-light')
}