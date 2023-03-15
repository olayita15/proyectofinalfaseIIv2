// GLOBAL
const router = require('express').Router();
router.use('/api', require('./api'));
router.use('/import', require('./import'));
module.exports = router;