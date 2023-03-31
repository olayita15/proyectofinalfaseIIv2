// GLOBAL
const router = require('express').Router();

router.use('/api', require('./api'));
router.use('/import', require('./import'));
router.use('/export', require('./export'));
module.exports = router;