// const data = require('./read');
const mongoose = require('mongoose')
const BasicInfo = require('../../../models/beneficiaries/basicInfoSchema');

const processExcelData =  (excelData) => {
 const basicInfo = {
    
    guardianPersonType: excelData[0] || '',
    guardianDocumentType: excelData[1] || '',
    guardianDocumentNumber: excelData[2] || '',
    guardianFirstName: excelData[3] || '',
    guardianSecondName: excelData[4] || '',
    guardianFirstLastName: excelData[5] || '',
    guardianSecondLastName: excelData[6] || '',
    guardianBirthdate: excelData[7] || '',
    guardianBirthCountry: excelData[8] || '',
    guardianBirthDepartment: excelData[9] || '',
    guardianBirthCity: excelData[10] || ''
    };

 
    return basicInfo;
};

module.exports = processExcelData;