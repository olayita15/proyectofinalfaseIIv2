// const data = require('./read');
//daniela
const mongoose = require('mongoose')
const BasicInfo = require('../../../models/beneficiaries/basicInfoSchema');

const processExcelData =  (excelData) => {
    const birthinformation = {
    birthCountry: excelData[1] || '',
    birthDepartment: excelData[2] || '',
    birthMunicipality: excelData[3] || '',
    birthDate: excelData[4] ? new Date((excelData[4] - 25569) * 86400 * 1000) : null
    };
    return birthinformation;
};

module.exports = processExcelData;