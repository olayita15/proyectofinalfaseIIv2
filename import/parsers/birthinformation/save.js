const Beneficiary = require('../beneficiary');

const saveBasicInfo = (birthinformation)=>{
    Object.assign(Beneficiary, {birthinformation});
    return Beneficiary;
};

module.exports = saveBasicInfo;
