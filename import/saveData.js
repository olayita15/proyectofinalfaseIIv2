const Beneficiary = require('../models/beneficiaries');
const beneficiary = require('./parsers/beneficiary');
const index = require('./parsers/index');
const { initGlobalVars, globalVars } = require('./parsers/controllers/globalConst');

const saveBasicInfoData = (path) => {
    initGlobalVars(path);
    for (row = globalVars.row; row <= globalVars.lastRow-1; row++){
        index(row);
        Beneficiary.create(beneficiary).then((result) => {
        // console.log('Datos insertados:', result);
        }).catch((err) => {
            if (err.code === 11000) {
                // Beneficiario duplicado
                console.log('Error: Beneficiario duplicado');
                console.log('Datos del beneficiario:', beneficiary);
            } else if (err.name === 'ValidationError') {
                // Beneficiario con datos inválidos
                console.log('Error: Beneficiario con datos inválidos');
                console.log('Mensajes de validación:', err.errors);
                console.log('Datos del beneficiario:', beneficiary);
            } else {
                console.log('Error desconocido:', err);
            }
        });
    }
};

module.exports = saveBasicInfoData;