const router = require("express").Router();
const Beneficiaries = require('../../../models/beneficiaries');

router.get("/", async (req, res) => {
    try {
        const birth = await birthInfo.find({}, {birthInfo: 1});
        res.json(birth);
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
        const { birthInfo } = beneficiary;
        res.json(birthInfo);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

router.patch("/:numDoc", async (req, res) => {
    try {
        const numDoc = req.params.numDoc;
        const beneficiary = await Beneficiaries.findOne({ "basicinfo.numDoc": numDoc },{birthInfo:1});
        if (!beneficiary) {
            return res.status(404).json({ message: "Beneficiary not found" });
        }
        const updates = {};
        for (const field in req.body) {
            updates[`birthInfo.${field}`] = req.body[field];
        }
        await beneficiary.updateOne({ $set: updates });
        const updatedBeneficiary = await Beneficiaries.findOne({ "basicinfo.numDoc": numDoc },{birthInfo:1});
        res.json(updatedBeneficiary.birthInfo);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
