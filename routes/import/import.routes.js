const router = require("express").Router();
const saveData = require('../../import/saveData');
const fs = require('fs').promises;
const path = require('path');

// Endpoint Create Beneficiarie
router.post("/", async (req, res)=>{
    try {
        // Guarda el archivo temporalmente en el servidor
        const file = req.files.file;
        const filePath = path.join(__dirname, 'temp', file.name);
        await fs.writeFile(filePath, file.data);

        // Utiliza la función saveData con la ruta del archivo temporal
        await saveData(filePath);

        // Borra el archivo temporal del servidor
        await fs.unlink(filePath);

        res.status(200).send('Datos importados correctamente');
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;