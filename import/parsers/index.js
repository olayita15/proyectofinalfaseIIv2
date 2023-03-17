const basicinfo = require('./basicInfo/index');
const disabilityInfo = require('./disabilityInfo/index');
const parent = require('./parent/index');
const residencyInformation = require('./residencyInformation/index');
const health = require('./health/index');
const socialInformation = require('./socialInformation/index');
const beneficiary = require('./beneficiary');

const compileInfo = (row) =>{
    basicinfo(row);
    /*disabilityInfo(row);
    parent(row);
    residencyInformation(row);
    health(row);
    socialInformation(row);*/
    console.log(beneficiary);
}

module.exports = compileInfo;