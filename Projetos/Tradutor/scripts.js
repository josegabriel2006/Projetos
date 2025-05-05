async function traduzirTexto() {
    const texto = document.getElementById('textoEntrada').value;
    const destino = document.getElementById('idiomaDestino').value;

    if (!texto.trim()) {
        document.getElementById('saida').innerText = 'Digite aalgum texto para traduzir.';
        return;
    }

    try {
        const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(texto)}&langpair=pt|${destino}`);
        const data = await response.json();

        if (data.responseData.translatedText) {
            document.getElementById('saida').innerText = data.responseData.translatedText;
        } else {
            document.getElementById('saida').innerText = 'Erro ao traduzir.';
        }
    } catch (error) {
        document.getElementById('saida').innerText = 'Erro na requisição: ' + error;
    }
}