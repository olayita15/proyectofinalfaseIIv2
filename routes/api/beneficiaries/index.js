//LOCAL beneficiarie
const router = require('express').Router();

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
router.use('/typeComplement', require('./typeComplement.routes.js'))


module.exports = router;