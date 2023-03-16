//LOCAL beneficiarie
const router = require('express').Router();
const errorController = require('../../../controllers/errors/errorController');

router.use('/',require('./beneficiaries.routes'))
router.use('/basicinfo',require('./basicInfo.routes'))
router.use('/birthinfo',require('./birthinformation.routes'))
router.use('/guardian',require('./guardian.routes'))
router.use('/health',  require('./health.routes'))
router.use('/assistance', require('./assistanceInformation.routes'))
router.use('/residencyInformation', require('./residencyInformation.routes'))
router.use('/socialInformation',require('./socialInformation.routes'))
router.use('/parent',require('./parent.routes'))
router.use('/disabilityInfo',require('./disabilityInfo.routes'))

// Error handling middleware
router.use(errorController.handleErrors);

module.exports = router;