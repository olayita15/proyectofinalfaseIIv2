//const data = require('./read');
const mongoose = require('mongoose')
const BasicInfo = require('../../../models/beneficiaries/parentSchema');

const processExcelData =  (excelData) => {
    /*console.log(excelData[18]);
    console.log(excelData[19]);*/
    const parent = {
        fatherDocumentType: excelData[1] || '',
        fatherDocumentNumber: excelData[2] || '',
        fatherFirstName: excelData[3] || '',
        fatherSecondName: excelData[4] || '',
        fatherFirstLastname: excelData[5] || '',
        fatherSecondLastname: excelData[6] || '',
        fatherBirthdate: excelData[7] ? new Date((excelData[7] - 25569) * 86400 * 1000) : null,
        fatherBirthCountry: excelData[9] || '',
        fatherBirthDepartment: excelData[10] || '',
        fatherBirthCity: excelData[11] || '',
        motherDocumentType: excelData[12] || '',
        motherDocumentNumber: excelData[13] || '',
        motherFirstName: excelData[14] || '',
        motherSecondName: excelData[15] || '',
        motherFirstLastname: excelData[16] || '',
        motherSecondLastname: excelData[17] || '',
        motherBirthdate: excelData[19] ? new Date((excelData[19] - 25569) * 86400 * 1000) : null,
        motherBirthCountry: excelData[21] || '',
        motherBirthDepartment: excelData[22] || '',
        motherBirthCity: excelData[23] || ''
    };
    return parent;
};

module.exports = processExcelData;