const router = require('express').Router();
const ResidencyInformationController = require('../../../controllers/beneficiaries/ResidencyInformationController');

// All information of the category - residency information
router.get('/', ResidencyInformationController.getAllResidencyInformation);

//  The information of a beneficiary in the category social information
router.get('/:numDoc', ResidencyInformationController.getResidencyInformationByNumDoc);

//  updated information - residency information
router.patch('/:numDoc', ResidencyInformationController.updateResidencyInformationByNumDoc);

module.exports = router;