const readFunction = require('../controllers/readFunction');

const readParent = (row)=>{
    const firstData = readFunction('66', '72', row);
    const secondData = readFunction('74', '84', row);
    const thirdData = readFunction ('85', '89', row);
    for (let i = 0; i < 10; i++) {
    firstData.push(secondData[i])};
    for (let i = 0; i < 4; i++) {
    firstData.push(thirdData[i])};
    return firstData;
};

module.exports = readParent;