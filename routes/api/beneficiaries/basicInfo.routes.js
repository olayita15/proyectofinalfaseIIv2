const router = require("express").Router();
const Beneficiary = require('../../../models/beneficiaries');
//thhs
// Endpoint Get all Beneficiaries basicinfo
router.get("/", async (req, res) => {
    try {
        const basicInfoRes = await Beneficiary.find({},{basicinfo:1});
        res.json(basicInfoRes);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });   
    }
});

// Endpoint Get Beneficiarie for numDoc
router.get("/:numDoc", async (req, res) => {
    try {
        const numDoc = req.params.numDoc;
        const beneficiary = await Beneficiary.find({ "basicinfo.numDoc": numDoc });
        if (!beneficiary) {
            return res.status(404).json({ message: "Beneficiary not found" });
        }
        res.json(beneficiary);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
});

// Endpoint patch to edit Beneficiarie basicinfo finding for numDoc
router.patch("/:numDoc", async (req, res) => {
    try {
        const numDoc = req.params.numDoc;
        const beneficiary = await Beneficiary.findOne({ "basicinfo.numDoc": numDoc },{basicinfo:1});
        if (!beneficiary) {
            return res.status(404).json({ message: "Beneficiary not found" });
        }
        const updates = {};
        for (const field in req.body) {
            console.log(field)
            updates[`basicinfo.${field}`] = req.body[field];
        }
        await beneficiary.updateOne({ $set: updates });
        const updatedBeneficiary = await Beneficiary.findOne({ "basicinfo.numDoc": numDoc },{basicinfo:1});
        res.json(updatedBeneficiary);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;