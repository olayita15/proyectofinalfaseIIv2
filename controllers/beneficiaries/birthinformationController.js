const Beneficiaries = require('../../models/beneficiaries');

async function getAllBirthInformation(req, res) {
  try {
    const birth = await Beneficiaries.find({}, {birthinformation: 1});
    res.json(birth);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message });
  }
}

async function getBirthInformationByNumDoc(req, res) {
  try {
    const { numDoc } = req.params;
    const beneficiary = await Beneficiaries.findOne({ "basicinfo.numDoc": numDoc }).lean();
    if (!beneficiary) {
        return res.status(404).json({ message: "Beneficiary not found" });
    }
    const { birthinformation } = beneficiary;
    res.json(birthinformation);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function updateBirthInformationByNumDoc(req, res) {
  try {
    const numDoc = req.params.numDoc;
    const beneficiary = await Beneficiaries.findOne({ "basicinfo.numDoc": numDoc },{birthinformation:1});
    if (!beneficiary) {
        return res.status(404).json({ message: "Beneficiary not found" });
    }
    const updates = {};
    for (const field in req.body) {
        updates[`birthinformation.${field}`] = req.body[field];
    }
    await beneficiary.updateOne({ $set: updates });
    const updatedBeneficiary = await Beneficiaries.findOne({ "basicinfo.numDoc": numDoc },{birthinformation:1}).lean();
    res.json(updatedBeneficiary.birthinformation);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getAllBirthInformation,
  getBirthInformationByNumDoc,
  updateBirthInformationByNumDoc
};
