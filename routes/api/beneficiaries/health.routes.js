const router = require("express").Router();
const healthInfo = require('../../../models/beneficiaries');
const Beneficiaries = require('../../../models/beneficiaries');

// Endpoint Get  General HealthInfo of all beneficiaries
router.get("/", async (req, res) => {
    try {
        const health = await healthInfo.find({}, {healthInfo: 1});
        res.json(health);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
});


// Endpoint Get HealthInfo by numDoc
router.get("/:numDoc", async (req, res) => {
    try {
        const { numDoc } = req.params;
        const beneficiary = await Beneficiaries.findOne({ "basicinfo.numDoc": numDoc }).lean();
        if (!beneficiary) {
            return res.status(404).json({ message: "Beneficiary not found" });
        }
        const { healthInfo } = beneficiary;
        res.json(healthInfo);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

// Endpoint patch to edit Beneficiarie basicinfo finding for numDoc
router.patch("/:numDoc", async (req, res) => {
    try {
        const numDoc = req.params.numDoc;
        const beneficiary = await Beneficiaries.findOne({ "basicinfo.numDoc": numDoc },{healthInfo:1});
        if (!beneficiary) {
            return res.status(404).json({ message: "Beneficiary not found" });
        }
        const updates = {};
        for (const field in req.body) {
            updates[`healthInfo.${field}`] = req.body[field];
        }
        await beneficiary.updateOne({ $set: updates });
        const updatedBeneficiary = await Beneficiaries.findOne({ "basicinfo.numDoc": numDoc },{healthInfo:1});
        res.json(updatedBeneficiary.healthInfo);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;