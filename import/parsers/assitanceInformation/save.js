const Beneficiary = require('../beneficiary');

const saveBasicInfo = (assitanceInformation)=>{
    Object.assign(Beneficiary, {assitanceInformation});
    return Beneficiary;
};

module.exports = saveBasicInfo;
