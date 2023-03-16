const router = require('express').Router();
const { getAllSocialInformation, getSocialInformationByNumDoc, updateSocialInformationByNumDoc } = require('../../../controllers/beneficiaries/socialInformationController');

router.get('/', getAllSocialInformation);

router.get('/:numDoc', getSocialInformationByNumDoc);

router.patch("/:numDoc", updateSocialInformationByNumDoc);

module.exports = router;
