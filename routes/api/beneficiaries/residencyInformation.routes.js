const router = require('express').Router();
const residencyInformation = require('../../../models/beneficiaries');

// All information of the category - residency information
router.get('/', async (req, res) => {
  try{
      const residencyInformationRes = await residencyInformation.find({},{residencyInformation:1});
      res.json(residencyInformationRes);
  } catch(err) {
      console.error(err);
      res.status(500).json({message: err.message});
  }
});

//  The information of a beneficiary in the category social information
router.get('/:numDoc', async (req, res) => {
  try{
      const numDoc = req.params.numDoc;
      const beneficiaryLocation = await residencyInformation.find({ 'residencyInformation.numDoc': numDoc });
      if (!beneficiaryLocation) {
        return res.status(404).json({ message: "Location beneficiary not found" });
      }
      res.json(beneficiaryLocation);
  } catch(err) {
      console.error(err);
      res.status(500).json({message: err.message});
  }
});

//  updated information - residency information

router.patch("/:numDoc", async (req, res) => {
  try {
    const numDoc = req.params.numDoc;
    const residencyInformation = await residencyInformation.findOne({ "residencyInformation.numDoc": numDoc },{residencyInformation:1});
    if (!residencyInformation) {
        return res.status(404).json({ message: "Residency Information not found" });
    }
    const updates = {};
    for (const field in req.body) {
        console.log(field)
        updates[`basicinfo.${field}`] = req.body[field];
    }
    await residencyInformation.updateOne({ $set: updates });
    const updatedResidencyInformation = await residencyInformation.findOne({ "residencyInformation.numDoc": numDoc },{residencyInformation:1});
    res.json(updatedResidencyInformation);
  } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
  }
});

module.exports = router;
