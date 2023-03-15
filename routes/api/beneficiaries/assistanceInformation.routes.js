const router = require("express").Router();
const assistInfo = require('../../../models/beneficiaries');
const Beneficiaries = require('../../../models/beneficiaries');

router.get("/", async (req, res) => {
    try {
        const assists = await assistInfo.find({}, {assistanceInformation: 1});
        res.json(assists);
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
        const { assistanceInformation } = beneficiary;
        res.json(assistanceInformation);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});


// Endpoint patch to edit Beneficiarie healthinfo finding for numDoc
router.patch("/:numDoc", async (req, res) => {
    try {
        const numDoc = req.params.numDoc;
        const beneficiary = await Beneficiaries.findOne({ "basicinfo.numDoc": numDoc },{assistanceInformation:1});
        if (!beneficiary) {
            return res.status(404).json({ message: "Beneficiary not found" });
        }
        const updates = {};
        for (const field in req.body) {
            updates[`assistanceInformation.${field}`] = req.body[field];
        }
        await beneficiary.updateOne({ $set: updates });
        const updatedBeneficiary = await Beneficiaries.findOne({ "basicinfo.numDoc": numDoc },{assistanceInformation:1});
        res.json(updatedBeneficiary.assistanceInformation);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});



module.exports = router;