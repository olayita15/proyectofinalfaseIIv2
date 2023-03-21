const Beneficiary = require('../beneficiary');

const saveParent = (parent)=>{
    Object.assign(Beneficiary, {parent});
    return Beneficiary;
};

module.exports = saveParent;
