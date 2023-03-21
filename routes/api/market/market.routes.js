const express = require('express');
const router = express.Router();
const marketController = require('../../../controllers/market/marketControllers');

// POST a new market object
router.post("/", marketController.createMarket);

module.exports = router;
