const Beneficiary = require('../beneficiary');

const saveBasicInfo = (residencyInformation)=>{
    Object.assign(Beneficiary, {residencyInformation});
    return Beneficiary;
};

module.exports = saveBasicInfo;
