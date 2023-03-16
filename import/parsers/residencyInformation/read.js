const readFunction = require('../controllers/readFunction');

const readBasicInfo = (row)=>{
    const firstData = readFunction('37', '48', row);
    return firstData;
};

module.exports = readBasicInfo;