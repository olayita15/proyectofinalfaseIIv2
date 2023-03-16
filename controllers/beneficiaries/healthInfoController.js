const Beneficiaries = require('../../models/beneficiaries');

exports.getHealthInfo = async (req, res) => {
    try {
        const health = await Beneficiaries.find({}, {healthInfo: 1});
        res.json(health);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
};

exports.getHealthInfoByNumDoc = async (req, res) => {
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
};

exports.editHealthInfoByNumDoc = async (req, res) => {
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
};
