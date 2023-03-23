const router = require("express").Router();
const saveData = require('../../import/saveData');
const fs = require('fs').promises;
const path = require('path');

const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Endpoint Create Beneficiarie
router.post("/",upload.single('archivo'), async (req, res)=>{
    try {
        // Guarda el archivo temporalmente en el servidor
        const file = req.file;
        const filePath = path.join(__dirname, file.originalname);
        await fs.writeFile(filePath, file.buffer);

        // Utiliza la función saveData con la ruta del archivo temporal
        await saveData(filePath);
        // Borra el archivo temporal del servidor
        await fs.unlink(filePath);

        res.status(200).json({message:'Datos importados correctamente'});
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;