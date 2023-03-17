const Beneficiary = require('../models/beneficiaries');
const beneficiary = require('./parsers/beneficiary');
const index = require('./parsers/index');
const { initGlobalVars, globalVars } = require('./parsers/controllers/globalConst');



const saveBasicInfoData = async (path) => {
    initGlobalVars(path);
    let failedBeneficiaries = [];
    for (row = globalVars.row; row <= globalVars.lastRow-1; row++){
        index(row);
        try {
            // Busca si ya existe un beneficiario con el mismo número de identificación
            const existingBeneficiary = await Beneficiary.find({ 'basicinfo.numDoc': beneficiary.basicinfo.numDoc });
            // Si ya existe, salta este registro y continúa con el siguiente
            if (existingBeneficiary.length > 0) {
                console.log(`Beneficiary with identification number ${existingBeneficiary[0].basicinfo.numDoc} already exists, skipping...`);
                failedBeneficiaries.push({ numDoc: existingBeneficiary[0].basicinfo.numDoc, error: 'Beneficiary already exists' });
                continue;
            };   
            // Si no existe, crea un nuevo registro
            const savedBeneficiary = await Beneficiary.create(beneficiary);
            console.log('Datos insertados:', savedBeneficiary);
        } catch (error) {
            // Maneja el error si se produce alguna excepción durante el proceso
            console.log('Error:', error.message);
            failedBeneficiaries.push({ numDoc: beneficiary.basicinfo.numDoc, error: error.message });
        }
    }
    console.log('Todo ha sido un exito');
    console.log(failedBeneficiaries);
};



module.exports = saveBasicInfoData;
