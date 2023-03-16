const Beneficiary = require('../../models/beneficiaries');

async function getAllParentInformation(req, res) {
  try {
    const parentRes = await Beneficiary.find({}, { parent: 1 });
    res.json(parentRes);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message });
  }
}

async function getParentInformationByNumDoc(req, res) {
  try {
    const numDoc = req.params.numDoc;
    const beneficiary = await Beneficiary.findOne({ "basicinfo.numDoc": numDoc });
    if (!beneficiary) {
      return res.status(404).json({ message: "Beneficiary not found" });
    }
    const { parent } = beneficiary;
    res.json({ parent });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function updateParentInformationByNumDoc(req, res) {
  try {
    const numDoc = req.params.numDoc;
    const beneficiary = await Beneficiary.findOne({ "basicinfo.numDoc": numDoc }, { parent: 1 });
    if (!beneficiary) {
      return res.status(404).json({ message: "Beneficiary not found" });
    }
    const updates = {};
    for (const field in req.body) {
      console.log(field);
      updates[`parent.${field}`] = req.body[field];
    }
    await beneficiary.updateOne({ $set: updates });
    const updatedBeneficiary = await Beneficiary.findOne({ "basicinfo.numDoc": numDoc }, { parent: 1 });
    res.json(updatedBeneficiary);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getAllParentInformation,
  getParentInformationByNumDoc,
  updateParentInformationByNumDoc,
};
