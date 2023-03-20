const readFunction = require('../controllers/readFunction');

const readBasicInfo = (row)=>{
    const firstData = readFunction('22', '25', row);
    const secondData = readFunction('15', '16', row);
    firstData.push(secondData[1]);
    return firstData;
};

module.exports = readBasicInfo;
//23 25