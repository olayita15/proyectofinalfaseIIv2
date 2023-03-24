const Beneficiary = require('../../models/beneficiaries');

exports.getAllResidencyInformation = async (req, res) => {
  try{
      const residencyInformationRes = await Beneficiary.find({},{residencyInformation:1});
      res.json(residencyInformationRes);
  } catch(err) {
      console.error(err);
      res.status(500).json({message: err.message});
  }
};

exports.getResidencyInformationByNumDoc = async (req, res) => {
  try{
      const numDoc = req.params.numDoc;
      const beneficiary = await Beneficiary.findOne({ 'basicinfo.numDoc': numDoc }, {residencyInformation:1}).lean();
      if (!beneficiary) {
        return res.status(404).json({ message: "Location beneficiary not found" });
      }
      res.json(beneficiary);
  } catch(err) {
      console.error(err);
      res.status(500).json({message: err.message});
  }
};

exports.updateResidencyInformationByNumDoc = async (req, res) => {
  try {
    const numDoc = req.params.numDoc;
    const beneficiary = await Beneficiary.findOne({ 'basicinfo.numDoc': numDoc },{residencyInformation:1});
    if (!beneficiary) {
        return res.status(404).json({ message: "Beneficiary not found" });
    }
    const updates = {};
    for (const field in req.body) {
        updates[`residencyInformation.${field}`] = req.body[field];
    }
    await beneficiary.updateOne({ $set: updates });
    const updatedBeneficiary = await Beneficiary.findOne({ "basicinfo.numDoc": numDoc },{residencyInformation:1}).lean();
    res.json(updatedBeneficiary);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
