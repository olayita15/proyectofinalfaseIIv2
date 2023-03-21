const readFunction = require('../controllers/readFunction');

const readBasicInfo = (row)=>{
    const firstData = readFunction('89', '100', row);
    console.log(firstData);
    return firstData;
};

module.exports = readBasicInfo;