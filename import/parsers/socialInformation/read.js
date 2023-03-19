const readFunction = require('../controllers/readFunction');

const readBasicInfo = (row)=>{
    const firstData = readFunction('48', '55', row);
    return firstData;
};

module.exports = readBasicInfo;