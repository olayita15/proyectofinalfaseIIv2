const express = require('express');
const router = express.Router();
const marketController = require('../../../controllers/market/marketControllers');

router.get("/", marketController.getAllMarkets);

router.get("/:type", marketController.getMarketByType);

// POST a new market object
router.post("/", marketController.createMarket);

router.patch("/", marketController.updateMarketByType);

module.exports = router;
