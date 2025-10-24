let imagens = [
    'assets/img/banner1.png',
    'assets/img/banner2.png',
    'assets/img/banner3.png'
]

let indiceAtualListaImagem = 0

function exibirImagem() {
    let imagemCarrossel = document
        .getElementById('img-carrossel')
    imagemCarrossel.src = imagens[indiceAtualListaImagem]
}

setInterval(function() {
    exibirImagem()
    indiceAtualListaImagem++

    if (indiceAtualListaImagem > 2) {
        indiceAtualListaImagem = 0
    }

}, 5000);

exibirImagem()
indiceAtualListaImagem++ 


