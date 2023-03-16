// const data = require('./read');
const mongoose = require('mongoose')
const BasicInfo = require('../../../models/beneficiaries/basicInfoSchema');

const processExcelData =  (excelData) => {
    const socialInformation = {
        groupEthnicity: excelData[1] || '',
        beneficiarySisbenized: excelData[2] === '_SI',
        sisbenScore: excelData[3] === '_SI',
        belongsToFamiliesInAction: excelData[4] === '_SI',
        directlyAffectedByArmedConflict: excelData[5] === '_SI',
        focusingCriteria: excelData[6] || '',
        justificationDocumentExists: excelData[7] === '_SI'
    };
    return socialInformation;
};

module.exports = processExcelData;