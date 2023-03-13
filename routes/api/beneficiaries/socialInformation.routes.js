const router = require('express').Router();
const socialInformation = require('../../../models/beneficiaries');

// All information of the category - social information

router.get('/', async (req, res) => {
    try{
        const socialInformationRes = await socialInformation.find({},{socialInformation:1});
        res.json(socialInformationRes);
    } catch(err) {
        console.error(err);
        res.status(500).json({message: err.message});
    }
});

//  The information of a beneficiary in the category social information

router.get('/:numDoc', async (req, res) => {
    try{
        const numDoc = req.params.numDoc;
        const socialInformation = await socialInformation.find({ 'socialInformation.numDoc': numDoc });
        if (!socialInformation) {
          return res.status(404).json({ message: "Social Information not found" });
        }
        res.json(socialInformation);
    } catch(err) {
        console.error(err);
        res.status(500).json({message: err.message});
    }
  });
  
  //  updated information - social information
  
  router.patch("/:numDoc", async (req, res) => {
    try {
      const numDoc = req.params.numDoc;
      const socialInformation = await socialInformation.findOne({ "socialInformation.numDoc": numDoc },{socialInformation:1});
      if (!socialInformation) {
          return res.status(404).json({ message: "Social Information not found" });
      }
      const updates = {};
      for (const field in req.body) {
          console.log(field)
          updates[`socialInformation.${field}`] = req.body[field];
      }
      await residencyInformation.updateOne({ $set: updates });
      const updatedSocialInformation = await socialInformation.findOne({ "socialInformation.numDoc": numDoc },{socialInformation:1});
      res.json(updatedSocialInformation);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
  });
  
module.exports = router;