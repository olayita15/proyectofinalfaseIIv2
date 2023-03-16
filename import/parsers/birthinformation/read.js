const readFunction = require('../controllers/readFunction');

const readBasicInfo = (row)=>{
    const firstData = readFunction('23', '25', row);
    return firstData;
};

module.exports = readBasicInfo;