const calendario = document.getElementById('calendario');

const opcoes = {
    initialView: 'dayGridMonth',
    locale: 'pt-br',
    width: 800,
    height: 500,
    headerToolbar: {
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
        center: 'title',
        left: ''
    },
    eventClick: function(info) {
        const reserva = info.event.extendedProps.reserva;
        alert(`Nome do Cliente: ${reserva.nomeCliente}\nProduto: ${reserva.produto}\nQuantidade: ${reserva.quantidade}\nData da Reserva: ${reserva.dataReserva}\nTelefone do Cliente: ${reserva.telefoneCliente}\nComentários: ${reserva.comentarios}`);
    }
};

const calendarioJS = new FullCalendar.Calendar(calendario, opcoes);

let reservasLS = window.localStorage.getItem('reservas');
reservasLS = JSON.parse(reservasLS);

if (reservasLS != undefined) {
    for (let i = 0; i < reservasLS.length; i++) {
        const reserva = reservasLS[i];

        calendarioJS.addEvent({
            title: `${reserva.nomeCliente} - ${reserva.produto}`,
            start: reserva.dataReserva,
            extendedProps: {
                reserva: reserva
            }
        });
    }
}

calendarioJS.render();

