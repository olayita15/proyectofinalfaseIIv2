// const data = require('./read');
const mongoose = require('mongoose')
const health = require('../../../models/beneficiaries/healthSchema');

const processExcelData =  (excelData) => {
    const health = {
        regime: excelData[1] || '',
        eps: excelData[2] || '',
        hasVaccinationCard: excelData[3] === 'SI',
        vaccinationVerificationDate: excelData[4] ? new Date((excelData[4] - 25569) * 86400 * 1000) : null,
        vaccinationCardUpToDate: excelData[5] === 'SI',
        hasGrowthAndDevelopmentCard: excelData[6] === 'SI',
        growthDevelopmentControlsReceived: excelData[7] || 0,
        prematurenessBackground: excelData[7] === 'SI',
        under40Weeks: excelData[9] === 'SI',
        cefalicProfile: excelData[10] || '',
        gestationalAgeAtBirth: excelData[11] || 0,
        weightAtBirth: excelData[12] || 0,
        heightAtBirth: excelData[13] || 0,
        exclusivelyBreastfeeding: excelData[14] === 'SI',
        exclusiveBreastfeedingDuration: excelData[14] || 0,
        totalBreastfeedingDuration: excelData[15] || 0,
        gestationWeeks: excelData[16] || 0,
        ticketNumber: excelData[17] || ''
        
    };
    return health;
};

module.exports = processExcelData;