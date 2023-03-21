const readFunction = require('../controllers/readFunction');

const readParent = (row)=>{
    const firstData = readFunction('66', '73', row);
    const secondData = readFunction('73', '84', row);
    const thirdData = readFunction ('83', '88', row);
    for (let i = 0; i < 10; i++) {
    firstData.push(secondData[i])};
    for (let i = 0; i < 6; i++) {
    firstData.push(thirdData[i])};
    return firstData;
    }
    
module.exports = readParent;