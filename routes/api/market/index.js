const router = require('express').Router();

router.use('/',require('./market.routes'));

module.exports = router;