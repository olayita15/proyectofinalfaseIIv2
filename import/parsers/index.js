const basicinfo = require('./basicInfo/index');
const residencyInformation = require('./residencyInformation/index');
const socialInformation = require('./socialInformation/index')
const beneficiary = require('./beneficiary');

const compileInfo = (row) =>{
    basicinfo(row);
    residencyInformation(row);
    socialInformation(row);
    console.log(beneficiary);
}

module.exports = compileInfo;