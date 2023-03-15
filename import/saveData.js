const Beneficiary = require('../models/beneficiaries');
const beneficiary = require('./parsers/beneficiary');
const index = require('./parsers/index');
const { initGlobalVars, globalVars } = require('./parsers/controllers/globalConst');

const saveBasicInfoData = (path) => {
    initGlobalVars(path);
    for (row = globalVars.row; row <= globalVars.lastRow-1; row++){
        index(row);
        Beneficiary.create(beneficiary).then((result) => {
            console.log('Datos insertados:', result);
        }).catch((err) => {
            console.log('Error:', err);
        }).finally((err)=>{
            // console.log('Error:', err.message);
            // const repeatedData = err.writeErrors.map((error) => error.op);
            // console.log('Datos repetidos:', repeatedData);
            console.log(err)
        })
    }
};

module.exports = saveBasicInfoData;