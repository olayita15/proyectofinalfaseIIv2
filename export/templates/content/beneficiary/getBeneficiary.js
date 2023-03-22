const Beneficiary = require('../../../../models/beneficiaries');

exports.getBeneficiary = async (numDoc) => {
    try {
        const beneficiary = await Beneficiary.find({ 'basicinfo.numDoc': numDoc });
        if (!beneficiary) {
            return null;
        }
        return beneficiary;
    } catch (error) {
        console.log(error);
        return null;
    }
};