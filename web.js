function mostrarSecao(secao) {
    // Esconde o resumo
    document.getElementById("portfolio").classList.add("hidden");

    // Esconde todas as seções específicas
    const secoes = document.querySelectorAll("section");
    secoes.forEach((s) => {
        if (s.id !== "servicos") s.classList.add("hidden");
    });

    // Mostra a seção específica clicada
    document.getElementById(secao).classList.remove("hidden");
}

function voltarResumo() {
    // Mostra o resumo
    document.getElementById("portfolio").classList.remove("hidden");

    // Esconde todas as seções específicas
    const secoes = document.querySelectorAll("section");
    secoes.forEach((s) => {
        if (s.id !== "servicos" && s.id !== "portfolio") s.classList.add("hidden");
    });
}

// Seleciona todos os vídeos da galeria
const videos = document.querySelectorAll(".resumo-video");

// Adiciona eventos para cada vídeo
videos.forEach((video) => {
    // Reproduz o vídeo quando o mouse passar por cima
    video.addEventListener("mouseover", () => {
        video.play();
    });

    // Pausa o vídeo quando o mouse sair
    video.addEventListener("mouseout", () => {
        video.pause();
        video.currentTime = 0; // Reinicia o vídeo
    });
});