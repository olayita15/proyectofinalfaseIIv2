const Beneficiary = require('../beneficiary');

const saveBasicInfo = (socialInformation)=>{
    Object.assign(Beneficiary, {socialInformation});
    return Beneficiary;
};

module.exports = saveBasicInfo;
