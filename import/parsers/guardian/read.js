const readFunction = require('../controllers/readFunction');
//d
const readBasicInfo = (row)=>{
    const firstData = readFunction('55', '65', row);
    return firstData;
};

module.exports = readBasicInfo;