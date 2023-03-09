const router = require("express").Router();
const User = require('../../../models/users/user.model');

router.post('/', async (req, res) => {
        try {
        const { username, email, password } = req.body;
        const user = new User({ username, email, password });
        console.log(user)
        await user.save();
        res.status(201).json({ message: 'Usuario agregado con éxito' });
        } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'No se pudo agregar el usuario' });
        }
});

module.exports = router;