const {getMarketByType} = require('./getMarket');

exports.getNutricionalNames = async (type)=>{
    const market = await getMarketByType(type);
    const names =[];
    for (let index = 0; index < market[0].nutritionalFoods.length; index++) {
        names.push(market[0].nutritionalFoods[index].name);
    }
    return names;
};
