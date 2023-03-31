const readFunction = require('../controllers/readFunction');

const readBasicInfo = (row)=>{
    const firstData = readFunction('27', '32', row);
    return firstData;
};

module.exports = readBasicInfo;