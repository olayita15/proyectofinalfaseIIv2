// const data = require('./read');
//daniela
const mongoose = require('mongoose')
const BasicInfo = require('../../../models/beneficiaries/basicInfoSchema');

const processExcelData =  (excelData) => {
const birthinformation = {
    
    birthCountry: excelData[0] || '',
    birthDepartment: excelData[1] || '',
    birthMunicipality: excelData[2] || '',
    birthDate: excelData[3] || ''
    };

  



    return birthinformation;
};

module.exports = processExcelData;