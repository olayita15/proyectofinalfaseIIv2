//LOCAL beneficiarie
const router = require('express').Router();

router.use('/',require('./beneficiaries.routes'))
router.use('/basicinfo',require('./basicInfo.routes'))


module.exports = router;