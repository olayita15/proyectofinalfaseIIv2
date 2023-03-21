const basicinfo = require('./basicInfo/index');
const residencyInformation = require('./residencyInformation/index');
const socialInformation = require('./socialInformation/index')
const assitanceInformation = require('./assitanceInformation/index')
const birthinformation = require('./birthinformation/index')
const guardian = require('./guardian/index')
const beneficiary = require('./beneficiary');

const compileInfo = (row) =>{
    basicinfo(row);
    residencyInformation(row);
    socialInformation(row);
    assitanceInformation(row);
    birthinformation(row);
    guardian(row);
    console.log(beneficiary);
}

module.exports = compileInfo;