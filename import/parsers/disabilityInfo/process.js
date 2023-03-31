// const data = require('./read');
const mongoose = require('mongoose')
const DisabilityInfo = require('../../../models/beneficiaries/disabilityInfoSchema');

const processExcelData =  (excelData) => {
    const disabilityInfo = {
        disability: excelData[1] === 'SI',
        certifiedDisability: excelData[2] === 'SI',
        entityCertifiesDisability: excelData[3] || '',
        disabilityCategory: excelData[4] || '',
        specifiedDisability: excelData[5] || '',
        disabilityRegistryEnrollment: excelData[6] === 'SI'
    };
    return disabilityInfo;
};

module.exports = processExcelData;