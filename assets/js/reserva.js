
function adicionarReserva() {
    const nomeCliente = document.getElementById('nome_cliente');
    const produto = document.getElementById('produto');
    const quantidade = document.getElementById('qtde_reserva');
    const dataReserva = document.getElementById('data_reserva');
    const telefoneCliente = document.getElementById('telefone_cliente');
    const comentarios = document.getElementById('comentarios_reserva');

    const reserva = {
        nomeCliente: nomeCliente.value,
        produto: produto.value,
        quantidade: quantidade.value,
        dataReserva: dataReserva.value,
        telefoneCliente: telefoneCliente.value,
        comentarios: comentarios.value
    };

    let reservasLS = window.localStorage.getItem('reservas');

    if (reservasLS == undefined) {
        reservasLS = [];
    } else {
        reservasLS = JSON.parse(reservasLS);
    }

    reservasLS.push(reserva);
    window.localStorage.setItem('reservas', JSON.stringify(reservasLS));

    alert('Reserva cadastrada com sucesso!');
}

