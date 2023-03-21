//daniela
const readFunction = require('../controllers/readFunction');

const readBasicInfo = (row)=>{
    const firstData = readFunction('0', '14', row);
    const secondData = readFunction('21', '22', row);
    firstData.push(secondData[1]);
    return firstData;
};

module.exports = readBasicInfo;