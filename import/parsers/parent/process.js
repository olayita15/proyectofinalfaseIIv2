// const data = require('./read');
const mongoose = require('mongoose')
const BasicInfo = require('../../../models/beneficiaries/parentSchema');

const processExcelData =  (excelData) => {
    const parent = {
        fatherDocumentType: excelData[1] || '',
        fatherDocumentNumber: excelData[2] || '',
        fatherFirstName: excelData[3] || '',
        fatherSecondName: excelData[4] || '',
        fatherFirstLastname: excelData[5] || '',
        fatherSecondLastname: excelData[6] || '',
        fatherBirthDate: excelData[2] ? new Date((excelData[2] - 25569) * 86400 * 1000) : null,
        fatherBirthCountry: excelData[8] || '',
        fatherBirthDepartment: excelData[9] || '',
        fatherBirthCity: excelData[10] || '',
        motherDocumentType: excelData[11] || '',
        motherDocumentNumber: excelData[12] || '',
        motherFirstName: excelData[13] || '',
        motherSecondName: excelData[14] || '',
        motherFirstLastname: excelData[15] || '',
        motherSecondLastname: excelData[16] || '',
        motherBirthdate: excelData[17] ? new Date((excelData[17] - 25569) * 86400 * 1000) : null,
        motherBirthCountry: excelData[18] || '',
        motherBirthDepartment: excelData[19] || '',
        motherBirthCity: excelData[20] || ''
    };
    return parent;
};

module.exports = processExcelData;