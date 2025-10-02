const password = document.getElementById('password')
const confirmaPassword = document.getElementById('confirma-password')


function cadastrarUsuario() {
    const nome = document.getElementById('nome')
    const email = document.getElementById('email')

    if (password.value == confirmaPassword.value) {
        let lista = window.localStorage.getItem('usuarios')

        if (lista == undefined) {
            lista = []
            let usuario = {
                'nome': nome.value,
                'email': email.value,
                'password': password.value
            }
            lista.push(usuario)

            window.localStorage.setItem('usuarios', JSON.stringify(lista))
            alert('Usuario cadastrado')
        } else {
            let listaE = window.localStorage.getItem('usuarios')
            listaE = JSON.parse(listaE)

            let usuarioA = {
                'nome': nome.value,
                'email': email.value,
                'password': password.value
            }

            listaE.push(usuarioA)
            window.localStorage.setItem('usuarios', JSON.stringify(listaE))
            alert('Usuario cadastrado')

            nome.value = ''
            email.value = ''
            password.value = ''
            confirmaPassword.value = ''
        }

    } else {
        alert('Senha não confere')
        password.value = ''
        confirmaPassword.value = ''
    }

}

function toggleSenha() {
    const exibirSenha = document.getElementById('exibir-senha')

    if (exibirSenha.checked == true) {
        password.type = 'text'
        confirmaPassword.type = 'text'
    } else {
        password.type = 'password'
        confirmaPassword.type = 'password'
    }
}