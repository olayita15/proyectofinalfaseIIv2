const router = require("express").Router();
const {exportExcel} = require('../../export/index');

// Endpoint Create Beneficiarie
router.post("/", async (req, res)=>{
    try {
        console.log(req.body);
        await exportExcel('./export/utils/prueba.xlsx', req.body);
        res.status(200).send('Datos exportados correctamente');
    } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message });
    }
});

module.exports = router;