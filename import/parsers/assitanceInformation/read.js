const readFunction = require('../controllers/readFunction');
//D
const readBasicInfo = (row)=>{
    const firstData = readFunction('31', '37', row);
    
    return firstData;
};

module.exports = readBasicInfo;