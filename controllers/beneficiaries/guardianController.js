const Beneficiaries = require('../../models/beneficiaries');

exports.getAllGuardians = async (req, res) => {
    try {
        const guardians = await Beneficiaries.find({}, {guardianInfo: 1});
        res.json(guardians);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
}

exports.getGuardianByNumDoc = async (req, res) => {
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
}

exports.updateGuardianInfo = async (req, res) => {
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
}
