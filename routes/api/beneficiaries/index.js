//LOCAL beneficiarie
const router = require('express').Router();

router.use('/',require('./beneficiaries.routes'))
router.use('/basicinfo',require('./basicInfo.routes'))
router.use('/health',  require('./health.routes'))
router.use('/assistance', require('./assistanceInformation.routes'))
router.use('/residencyInformation', require('./residencyInformation.routes'))
router.use('/parent',require('./parent.routes'))
router.use('/disabilityInfo',require('./disabilityInfo.routes'))


module.exports = router;