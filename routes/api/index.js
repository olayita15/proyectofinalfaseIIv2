//LOCAL
const router = require('express').Router();
const verifyToken = require('../../middlewares/authMiddleware');

router.use('/beneficiaries',require('./beneficiaries'))
router.use('/user',require('./user'))

module.exports = router;