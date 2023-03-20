// const data = require('./read');
const mongoose = require('mongoose')
const BasicInfo = require('../../../models/beneficiaries/basicInfoSchema');

const processExcelData =  (excelData) => {
    const assitanceInformation = {
    requiresAssistance: excelData[0] === 'ACTIVO',
    requiresTechSupport: excelData[1] === 'ACTIVO',
    hasTechSupport: excelData[2] === 'ACTIVO',
    requiresTherapy: excelData[3] === 'ACTIVO',
    receivesTherapy: excelData[4] === 'ACTIVO',
    hasInterdictionProcess: excelData[5] === 'ACTIVO'
    };

    return assitanceInformation;
};

module.exports = processExcelData;