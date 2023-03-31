const Market = require('../../models/market/marketSchema');

exports.getAllMarkets = async (req, res) => {
    try {
        const marketsRes = await Market.find();
        res.json(marketsRes);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
};

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

exports.updateMarketByType = async (req, res) => {
    try {
        const type = req.params.type;
        const updatedMarket = await Market.findOneAndUpdate({ type: type }, req.body, { new: true });
        if (!updatedMarket) {
            return res.status(404).json({ message: 'Market not found' });
        }
        res.json(updatedMarket);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};
