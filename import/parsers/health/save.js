const Beneficiary = require('../beneficiary');

const saveHealth = (health)=>{
    Object.assign(Beneficiary, {health});
    return Beneficiary;
};

module.exports = saveHealth;
