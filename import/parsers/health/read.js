const readFunction = require('../controllers/readFunction');

const readBasicInfo = (row)=>{
    const firstData = readFunction('87', '106', row);
    console.log(firstData);
    return firstData;
};

module.exports = readBasicInfo;