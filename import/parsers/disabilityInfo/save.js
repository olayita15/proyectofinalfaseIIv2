const Beneficiary = require('../beneficiary');

const saveBasicInfo = (disabilityInfo)=>{
    Object.assign(Beneficiary, {disabilityInfo});
    return Beneficiary;
};

module.exports = saveBasicInfo;
