const router = require("express").Router();
const Beneficiaries = require('../../../models/beneficiaries');

router.get("/", async (req, res) => {
    try {
        const guardian = await Beneficiaries.find({}, {guardianInfo: 1});
        res.json(guardian);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
});

router.get("/:numDoc", async (req, res) => {
    try {
        const { numDoc } = req.params;
        const beneficiary = await Beneficiaries.findOne({ "basicinfo.numDoc": numDoc }).lean();
        if (!beneficiary) {
            return res.status(404).json({ message: "Beneficiary not found" });
        }
        const { guardianInfo} = beneficiary;
        res.json(guardianInfo);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

// Endpoint patch to edit Beneficiarie healthinfo finding for numDoc
router.patch("/:numDoc", async (req, res) => {
    try {
        const numDoc = req.params.numDoc;
        const beneficiary = await Beneficiaries.findOne({ "basicinfo.numDoc": numDoc },{guardianInfo:1});
        if (!beneficiary) {
            return res.status(404).json({ message: "Beneficiary not found" });
        }
        const updates = {};
        for (const field in req.body) {
            updates[`guardianInfo.${field}`] = req.body[field];
        }
        await beneficiary.updateOne({ $set: updates });
        const updatedBeneficiary = await Beneficiaries.findOne({ "basicinfo.numDoc": numDoc },{guardianInfo:1});
        res.json(updatedBeneficiary.guardianInfo);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;