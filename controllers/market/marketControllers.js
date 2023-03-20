const Market = require('../../models/market/marketSchema');

exports.createMarket = async (req, res) => {
    try {
        const newMarketRes = await Market.create(req.body);
        res.json(newMarketRes);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
};