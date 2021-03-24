

class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            //TODO: VALIDAR JWT SI ES INVALIDO DESCOPNECTAR
            //TODO SABER QUE USURAIO ESTA ACTIVO CON EL UID
            //EMITIR TODOS LOS USUARIOS CONECTADOS
            //TODO SOCKET JOIN
            //ESCUCHAR CUANDO UN CLIENTE ENVIA UN MENSAJE (MENSAJE'PERSONAL)
            //TODO DISCONECT
            //TODO EMITIR TODOS LOS USUIARIOS CONECTADOS

        });
    }


}


module.exports = Sockets;