// const data = require('./read');
const mongoose = require('mongoose')
const BasicInfo = require('../../../models/beneficiaries/basicInfoSchema');

const processExcelData =  (excelData) => {
    const assitanceInformation = {
    requiresAssistance: excelData[1] === 'SI_',
    requiresTechSupport: excelData[2] === 'SI_',
    hasTechSupport: excelData[3] === 'SI_',
    requiresTherapy: excelData[4] === 'SI_',
    receivesTherapy: excelData[5] === 'SI_',
    hasInterdictionProcess: excelData[6] === 'SI_'
    };

    return assitanceInformation;
};

module.exports = processExcelData;