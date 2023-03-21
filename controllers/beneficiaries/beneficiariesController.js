const Beneficiaries = require('../../models/beneficiaries');

exports.getAllBeneficiaries = async (req, res) => {
    try {
        const beneficiariesRes = await Beneficiaries.find();
        res.json(beneficiariesRes);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
};

exports.getBeneficiaryByNumDoc = async (req, res) => {
    try {
        const numDoc = req.params.numDoc;
        const beneficiary = await Beneficiaries.find({ 'basicinfo.numDoc': numDoc });
        if (!beneficiary) {
            return res.status(404).json({ message: 'Beneficiary not found' });
        }
        res.json(beneficiary);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

exports.createBeneficiarie = async (req, res) => {
    try {
        const newBeneficiariesRes = await Beneficiaries.create(req.body);
        newBeneficiariesRes.fullName = req.body.fullName;
        const newBeneficiariesJSON = newBeneficiariesRes.toObject({ virtuals: true });
        res.json(newBeneficiariesJSON);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
};