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