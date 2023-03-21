//LOCAL
const router = require('express').Router();


router.use('/beneficiaries',require('./beneficiaries'));
router.use('/market',require('./market'));
router.use('/user',require('./user'));

module.exports = router;