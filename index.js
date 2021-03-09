const path = require('path');
const express = require('express');
const app = express();

// Configuracion del puerto
app.set('port', process.env.PORT || 3000);

// Archivos de frontend
app.use(express.static(path.join(__dirname, 'public')));

// iniciando el servidor
const server = app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port'));
});

// websockets
const socketIO = require('socket.io');
const io = socketIO(server);

// Contador de guias
var counter = 0;

// escuchando las acciones de la vista
io.on('connection', (socket) => {
    console.log('Nueva conexión', socket.id);
    io.sockets.emit('server-count', counter);
    socket.on('api', (data) => {
        
        counter++;
        io.sockets.emit('server-count', counter);
    });
});