const Beneficiary = require('../beneficiary');

const saveHealth = (healthInfo)=>{
    Object.assign(Beneficiary, {healthInfo});
    return Beneficiary;
};

module.exports = saveHealth;
