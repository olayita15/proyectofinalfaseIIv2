require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors =  require('cors')

// const prueba = require('./export/templates/content/market/getFoodCant');

// prueba.getFoodCant('GESTANTES LACTANTES');

// const prueba = require('./export/index');

// prueba.prueba('./export/upload/prueba.xlsx')

//Definicion del servidor
const app = express();
app.use(express.json());

//Conexión front cors
app.use(cors());

//Rutas
app.use(require('./routes'));

// Port assign
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`servidor andando en: ${PORT}`)
});

// mongo db conection
mongoose.connect(process.env.URL,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
    .then(() => console.log('Base de datos conectada'))
    .catch(error => console.log('Error de conexión a MongoDB: ', error));

module.exports = app;