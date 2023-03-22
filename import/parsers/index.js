const basicinfo = require('./basicInfo/index');
const disabilityInfo = require('./disabilityInfo/index');
const parent = require('./parent/index');
const residencyInformation = require('./residencyInformation/index');
const healthInfo = require('./health/index');
const socialInformation = require('./socialInformation/index')
const assitanceInformation = require('./assitanceInformation/index')
const birthinformation = require('./birthinformation/index')
const guardian = require('./guardian/index')
const beneficiary = require('./beneficiary');

const compileInfo = (row) =>{
    basicinfo(row);
    disabilityInfo(row);
    parent(row);
    residencyInformation(row);
    health(row);
    socialInformation(row);
    assitanceInformation(row);
    birthinformation(row);
    guardian(row);
}

module.exports = compileInfo;