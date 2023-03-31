const Beneficiary = require('../beneficiary');

const saveBasicInfo = (assistanceInformation)=>{
    Object.assign(Beneficiary, {assistanceInformation});
    return Beneficiary;
};

module.exports = saveBasicInfo;
