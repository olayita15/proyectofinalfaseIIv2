// const data = require('./read');
const mongoose = require('mongoose')
const BasicInfo = require('../../../models/beneficiaries/basicInfoSchema');

const processExcelData =  (excelData) => {
    const socialInformation = {
        groupEthnicity: excelData[1] || '',
        beneficiarySisbenized: excelData[2] === 'SI_',
        sisbenScore: excelData[3] || '',
        belongsToFamiliesInAction: excelData[4] === 'SI_',
        directlyAffectedByArmedConflict: excelData[5] === 'SI_',
        focusingCriteria: excelData[6] || '',
        justificationDocumentExists: excelData[7] === 'SI_'
    };
    return socialInformation;
};

module.exports = processExcelData;