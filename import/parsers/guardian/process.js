// const data = require('./read');
const mongoose = require('mongoose')
const BasicInfo = require('../../../models/beneficiaries/basicInfoSchema');

const processExcelData =  (excelData) => {
 const basicInfo = {
    
    guardianPersonType: excelData[1] || '',
    guardianDocumentType: excelData[2] || '',
    guardianDocumentNumber: excelData[3] || '',
    guardianFirstName: excelData[4] || '',
    guardianSecondName: excelData[5] || '',
    guardianFirstLastName: excelData[6] || '',
    guardianSecondLastName: excelData[7] || '',
    guardianBirthdate: excelData[8] || '',
    guardianBirthCountry: excelData[9] || '',
    guardianBirthDepartment: excelData[10] || '',
    guardianBirthCity: excelData[11] || ''
    };


    return basicInfo;
};

module.exports = processExcelData;