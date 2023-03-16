const router = require('express').Router();
const residencyInformationController = require('../../../controllers/beneficiaries/ResidencyInformationController');

// All information of the category - residency information
router.get('/', residencyInformationController.getAllResidencyInformation);

//  The information of a beneficiary in the category social information
router.get('/:numDoc', residencyInformationController.getResidencyInformationByNumDoc);

//  updated information - residency information
router.patch("/:numDoc", residencyInformationController.updateResidencyInformationByNumDoc);

module.exports = router;
