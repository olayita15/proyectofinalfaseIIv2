const router = require("express").Router();
const Beneficiaries = require('../../../models/beneficiaries');

// Endpoint Get All Beneficiaries
router.get("/", async (req, res) => {
    try {
        const beneficiariesRes = await Beneficiaries.find();
        res.json(beneficiariesRes);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
});

// Endpoint Create Beneficiarie
router.post("/", async (req, res)=>{
    try {
    const newBeneficiariesRes = await Beneficiaries.create(req.body);
    newBeneficiariesRes.fullName = req.body.fullName;
    const newBeneficiariesJSON = newBeneficiariesRes.toObject({ virtuals: true });
    res.json(newBeneficiariesJSON);
    } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message });
    }
});

module.exports = router;