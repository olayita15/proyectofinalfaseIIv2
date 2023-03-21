const Beneficiary = require('../beneficiary');

const saveBasicInfo = (healthInfo)=>{
    Object.assign(Beneficiary, {healthInfo});
    return Beneficiary;
};

module.exports = saveBasicInfo;
