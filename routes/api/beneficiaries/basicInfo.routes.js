const router = require('express').Router();
const Beneficiary = require('../../../models/beneficiaries');
<<<<<<< HEAD
//thhs
=======
const { getBasicInfo, getBeneficiaryByNumDoc, editBeneficiaryBasicInfo } = require('../../../controllers/beneficiaries/basicinfoController');

>>>>>>> chris
// Endpoint Get all Beneficiaries basicinfo
router.get('/', getBasicInfo);

// Endpoint Get Beneficiary for numDoc
router.get('/:numDoc', getBeneficiaryByNumDoc);

// Endpoint patch to edit Beneficiary basicinfo finding for numDoc
router.patch('/:numDoc', editBeneficiaryBasicInfo);

module.exports = router;
