const readFunction = require('../controllers/readFunction');

const readBasicInfo = (row)=>{
    const firstData = readFunction('49', '55', row);
    return firstData;
};

module.exports = readBasicInfo;