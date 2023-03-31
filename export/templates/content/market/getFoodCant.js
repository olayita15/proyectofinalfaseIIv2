const {getMarketByType} = require('./getMarket');

exports.getFoodCant = async (type)=>{
    const market = await getMarketByType(type);
    const names =[];
    for (let index = 0; index < market[0].foodsToPrepare.length; index++) {
        names.push(market[0].foodsToPrepare[index].quantity);
    }
    return names;
};
