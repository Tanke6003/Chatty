// Servidor de Express
const express  = require('express');
const http     = require('http');
const socketio = require('socket.io');
const path     = require('path');
const Sockets  = require('./sockets');
const cors     = require('cors');
const { dbConnection } = require('../databases/config');

class Server {

    constructor() {

        this.app  = express();
        this.port = process.env.PORT;
        //conexion db
        dbConnection();
        // Http server
        this.server = http.createServer( this.app );
        
        // Configuraciones de sockets
        this.io = socketio( this.server, { /* configuraciones */ } );
    }

    middlewares() {
        // Desplegar el directorio público
        this.app.use( express.static( path.resolve( __dirname, '../public' ) ) );
        //CORS
        this.app.use( cors());
        //parseo del body
        this.app.use( express.json());
        //API end points
        this.app.use('/api/mensajes',require('../router/mensajes'));
        this.app.use('/api/login',require('../router/auth'));
    }

    // Esta configuración se puede tener aquí o como propieda de clase
    // depende mucho de lo que necesites
    configurarSockets() {
        new Sockets( this.io );
    }

    execute() {

        // Inicializar Middlewares
        this.middlewares();

        // Inicializar sockets
        this.configurarSockets();

        // Inicializar Server
        this.server.listen( this.port, () => {
            console.log('Server corriendo en puerto:', this.port );
        });
    }

}


module.exports = Server;