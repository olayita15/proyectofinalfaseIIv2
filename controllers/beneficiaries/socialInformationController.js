const Beneficiary = require('../../models/beneficiaries');

const getAllSocialInformation = async (req, res) => {
    try {
        const socialInformationRes = await Beneficiary.find({},{socialInformation:1});
        res.json(socialInformationRes);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: err.message});
    }
}

const getSocialInformationByNumDoc = async (req, res) => {
    try {
        const numDoc = req.params.numDoc;
        const socialInformation = await Beneficiary.find({ 'basicinfo.numDoc': numDoc },{socialInformation:1}).lean();
        if (!socialInformation) {
            return res.status(404).json({ message: "Social Information not found" });
        }
        res.json(socialInformation);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: err.message});
    }
}

const updateSocialInformationByNumDoc = async (req, res) => {
    try {
        const numDoc = req.params.numDoc;
        const socialInformation = await Beneficiary.findOne({ "basicinfo.numDoc": numDoc },{socialInformation:1});
        if (!socialInformation) {
            return res.status(404).json({ message: "Social Information not found" });
        }
        const updates = {};
        for (const field in req.body) {
            console.log(field)
            updates[`socialInformation.${field}`] = req.body[field];
        }
        await socialInformation.updateOne({ $set: updates });
        const updatedSocialInformation = await Beneficiary.findOne({ "basicinfo.numDoc": numDoc },{socialInformation:1}).lean();
        res.json(updatedSocialInformation);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllSocialInformation,
    getSocialInformationByNumDoc,
    updateSocialInformationByNumDoc
}
