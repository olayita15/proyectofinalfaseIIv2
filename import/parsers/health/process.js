// const data = require('./read');
const mongoose = require('mongoose')
const health = require('../../../models/beneficiaries/healthSchema');

const processExcelData =  (excelData) => {
    const healthInfo = {
        regime: excelData[1] || '',
        eps: excelData[2] || '',
        hasVaccinationCard: excelData[3] === 'SI_',
        vaccinationVerificationDate: excelData[4] === 'SI_',
        vaccinationCardUpToDate: excelData[5] === 'SI_',
        hasGrowthAndDevelopmentCard: excelData[6] === 'SI_',
        growthDevelopmentControlsReceived: excelData[7] || '',
        prematurenessBackground: excelData[7] === 'SI_',
        under40Weeks: excelData[9] === 'SI_',
        cefalicProfile: excelData[10] || '',
        gestationalAgeAtBirth: excelData[11] || 0,
        weightAtBirth: excelData[12].toString().match(/\d+/)[0] || 0,
        heightAtBirth: excelData[13].toString().match(/\d+/)[0] || 0,
        exclusivelyBreastfeeding: excelData[14] === 'SI_',
        exclusiveBreastfeedingDuration: excelData[15] || 0,
        totalBreastfeedingDuration: excelData[16] || 0,
        gestationWeeks: excelData[17] || 0,
        ticketNumber: excelData[18] || ''
        
    };
    return healthInfo;
};

module.exports = processExcelData;