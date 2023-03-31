const Beneficiary = require('../beneficiary');

const saveBasicInfo = (guardianInfo)=>{
    Object.assign(Beneficiary, {guardianInfo});
    return Beneficiary;
};

module.exports = saveBasicInfo;
