const Beneficiary = require('../beneficiary');

const saveBasicInfo = (basicinfo)=>{
    Object.assign(Beneficiary, {basicinfo});
    return Beneficiary;
};

module.exports = saveBasicInfo;
