require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { createServer } = require("http");
const { Server } = require("socket.io");

//Definicion del servidor
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
        origin: "http://localhost:4200",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
      } 
});

app.use(express.json());

//Conexión front cors
app.use(cors());

//Rutas
app.use(require('./routes'));

// mongo db conection
mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Base de datos conectada'))
    .catch(error => console.log('Error de conexión a MongoDB: ', error));

// Manejar conexiones de Socket.IO
io.on('connection', (socket) => {
  console.log('Cliente conectado');

  // Escuchar eventos enviados por el cliente
  socket.on('evento-del-cliente', (data) => {
    console.log('Evento recibido desde el cliente:', data);

    // Enviar un evento al cliente
    socket.emit('evento-del-servidor', { mensaje: 'Hola cliente!' });
  });
});

module.exports = {httpServer, io};
