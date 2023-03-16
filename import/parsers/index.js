const basicinfo = require('./basicInfo/index');
const residencyInformation = require('./residencyInformation/index');
const socialInformation = require('./socialInformation/index')
const beneficiary = require('./beneficiary');

const compileInfo = (row) =>{
    basicinfo(row);
    residencyInformation(row);
    socialInformation(row);
}

module.exports = compileInfo;