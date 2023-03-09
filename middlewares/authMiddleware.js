require('dotenv').config()

const jwt = require('jsonwebtoken');
const TOKEN_NAME = 'Authorization';

const errorHandler = (res, message) => {
    console.log(message);
    res.status(401).json({ error: message });
};

const verifyToken = async (req, res, next) => {
    const token = req.header(TOKEN_NAME);
    if (!token) {
        return errorHandler(res, 'Acceso denegado');
    }
    try {
        const verified = await jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        errorHandler(res, 'Token no valido');
    }
};

module.exports = verifyToken;
