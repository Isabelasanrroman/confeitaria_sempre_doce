let imagens = [
    'assets/img/bolo1.PNG',
    'assets/img/bolo2.PNG',
    'assets/img/bolo3.PNG'
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


