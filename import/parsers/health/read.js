const readFunction = require('../controllers/readFunction');

const readBasicInfo = (row)=>{
    const firstData = readFunction(88, 105, row);
    return firstData;
};

module.exports = readBasicInfo;