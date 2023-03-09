const router = require("express").Router();
const beneficiaries = require('../../../models/beneficiaries');

router.get("/", async (req, res) => {
    try {
        const beneficiariesRes = await beneficiaries.find();
        res.json(beneficiariesRes);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
});

router.post("/", async (req, res)=>{
    try {
        console.log(req.body)
        console.log(beneficiaries)
        const newBeneficiariesRes = await beneficiaries.create(req.body);
        console.log(newBeneficiariesRes)
        res.json(newBeneficiariesRes);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;