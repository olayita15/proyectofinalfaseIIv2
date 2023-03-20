const Market = require('../../models/market/marketSchema');

exports.getMarketByType = async (req, res) => {
    try {
        const type = req.params.type;
        const market = await Market.find({ 'type': type });
        if (!market) {
            return res.status(404).json({ message: 'Market not found' });
        }
        res.json(market);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

exports.createMarket = async (req, res) => {
    try {
        const newMarketRes = await Market.create(req.body);
        res.json(newMarketRes);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
};

