const router = require("express").Router();
const {exportExcel} = require('../../export/index');
const fs = require('fs');

// Endpoint Create Beneficiarie
router.post("/", async (req, res)=>{
    try {
        console.log(req.body);
        await exportExcel('./export/utils/prueba.xlsx', req.body);
        await res.set('Cache-Control', 'no-cache');
        await res.set('Expires', '-1');
        const filePath = 'C:/Users/EQUIPO01/Documents/Chris/proyectos/ProyectoFinalBackendFaseII/export/upload/modificado.xlsx';
        // Esperar a que se cree el archivo
        await new Promise(resolve => setTimeout(resolve, 10000));
        // Verificar que el archivo existe
        if (fs.existsSync(filePath)) {
            res.status(200).sendFile(filePath, () => {
                // Borrar el archivo después de enviarlo al front
                fs.unlink(filePath, () => {});
            });
        } else {
            res.status(500).json({ message: "El archivo no existe" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
