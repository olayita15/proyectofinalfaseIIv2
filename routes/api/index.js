//LOCAL
const router = require('express').Router();


router.use('/beneficiaries',require('./beneficiaries'));
router.use('/user',require('./user'));

module.exports = router;