const Beneficiary = require('../beneficiary');

const saveBasicInfo = (guardian)=>{
    Object.assign(Beneficiary, {guardian});
    return Beneficiary;
};

module.exports = saveBasicInfo;
