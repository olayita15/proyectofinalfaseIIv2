const Beneficiary = require('../../models/beneficiaries');

exports.getAllDisabilityInfo = async (req, res) => {
  try {
    const disabilityInfoRes = await Beneficiary.find({}, { disabilityInfo: 1 });
    res.json(disabilityInfoRes);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message });
  } 
};

exports.getDisabilityInfoByDoc = async (req, res) => {
  try {
    const numDoc = req.params.numDoc;
    const beneficiary = await Beneficiary.findOne({ "basicinfo.numDoc" : numDoc });
    if (!beneficiary) {
      return res.status(404).json({ message: "Beneficiary not found" });
    }
    const { disabilityInfo } = beneficiary;
    res.json({ disabilityInfo });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

exports.updateDisabilityInfoByDoc = async (req, res) => {
  try {
    const numDoc = req.params.numDoc;
    const beneficiary = await Beneficiary.findOne({ "basicinfo.numDoc": numDoc }, { disabilityInfo: 1 });
    if (!beneficiary) {
      return res.status(404).json({ message: "Beneficiary not found" });
    }
    const updates = {};
    for (const field in req.body) {
      console.log(field)
      updates[`disabilityInfo.${field}`] = req.body[field];
    }
    await beneficiary.updateOne({ $set: updates });
    const updatedBeneficiary = await Beneficiary.findOne({ "basicinfo.numDoc": numDoc }, { disabilityInfo: 1 });
    res.json(updatedBeneficiary);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
