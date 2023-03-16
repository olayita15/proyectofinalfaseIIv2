// const data = require('./read');
const mongoose = require('mongoose')
const BasicInfo = require('../../../models/beneficiaries/basicInfoSchema');

const processExcelData =  (excelData) => {
    const residencyInformation = {
        countryOfResidence: excelData[1] || '',
        residenceDepartment: excelData[2] || '',
        locationZone: excelData[3] || '',
        headerType: excelData[4] || '',
        localityName: excelData[5] || '',
        neighborhood: excelData[6] || '',
        foreignZoneName: excelData[7] || '',
        address: excelData[8] || '',
        primaryPhone: excelData[9] || '',
        secondaryPhone: excelData[10] || '',
        householdStratum: excelData[11] || ''
    };
    return residencyInformation;
};

module.exports = processExcelData;