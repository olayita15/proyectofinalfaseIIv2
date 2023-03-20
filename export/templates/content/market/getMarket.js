const Market = require('../../../../models/market/marketSchema');

exports.getMarketByType = async (type) => {
    try {
        const market = await Market.find({ 'type': type });
        if (!market) {
            return null;
        }
        return market;
    } catch (error) {
        console.log(error);
        return null;
    }
};