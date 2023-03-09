const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../../models/users/user.model');

// Ruta para el inicio de sesión
router.post('/', async (req, res) => {
    try {
        // Verificar si el usuario existe en la base de datos
        const user = await User.findOne({ email: req.body.email });
        console.log(user)
        console.log(req.body.email)

        if (!user) return res.status(400).json({ error: 'Credenciales no válidas' });

        // Verificar si la contraseña es correcta
        const validPassword = await bcrypt.compare(req.body.password,user.password);
        console.log(validPassword)
        console.log(req.body.password)
        console.log(user.password)
        if (!validPassword) return res.status(400).json({ error: 'Credenciales no válidas' });

        // Generar un token de acceso
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

        res.header('auth-token', token).json({ token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

module.exports = router;
