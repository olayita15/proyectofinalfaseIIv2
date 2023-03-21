const router = require("express").Router();
const saveData = require('../../import/saveData');

// Endpoint Create Beneficiarie
router.post("/", async (req, res)=>{
    try {
        await saveData('./import/download/beneficiariesBDreal.xlsm');
        res.status(200).send('Datos importados correctamente');
    } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message });
    }
});

module.exports = router;
