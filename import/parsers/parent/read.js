const readFunction = require('../controllers/readFunction');

const readParent = (row)=>{
    const firstData = readFunction('66', '72', row);
    const secondData = readFunction('74', '84', row);
    const thirdData = readFunction ('86', '88', row);
    firstData.push(secondData[0,1,2,3,4,5,6,7,8,9]);
    firstData.push(thirdData[0,1,2]);
    return firstData;
};

module.exports = readParent;