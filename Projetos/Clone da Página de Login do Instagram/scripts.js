let imagem = document.getElementById("troca-imagem")


function trocaImagem() {
    if (imagem.style.opacity == 0) {
        imagem.style.opacity = 1
    } else {
        imagem.style.opacity = 0
    }
}

setInterval(() => {
    trocaImagem()
}, 3000)

// 3000 milisegundos = 3 segundos
// 1 = Colocando um Valor
// 2 == Comparando/Comparação