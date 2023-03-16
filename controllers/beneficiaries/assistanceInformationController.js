const Beneficiaries = require('../../models/beneficiaries');

exports.getAllAssistance = async (req, res) => {
    try {
        const assists = await Beneficiaries.find({}, { assistanceInformation: 1 });
        res.json(assists);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

exports.getAssistanceByNumDoc = async (req, res) => {
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
};

exports.updateAssistanceByNumDoc = async (req, res) => {
    try {
        const numDoc = req.params.numDoc;
        const beneficiary = await Beneficiaries.findOne({ "basicinfo.numDoc": numDoc }, { assistanceInformation: 1 });
        if (!beneficiary) {
            return res.status(404).json({ message: "Beneficiary not found" });
        }
        const updates = {};
        for (const field in req.body) {
            updates[`assistanceInformation.${field}`] = req.body[field];
        }
        await beneficiary.updateOne({ $set: updates });
        const updatedBeneficiary = await Beneficiaries.findOne({ "basicinfo.numDoc": numDoc }, { assistanceInformation: 1 });
        res.json(updatedBeneficiary.assistanceInformation);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};
