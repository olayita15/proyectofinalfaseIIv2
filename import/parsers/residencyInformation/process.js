// const data = require('./read');
const mongoose = require('mongoose')
const BasicInfo = require('../../../models/beneficiaries/basicInfoSchema');

const processExcelData =  (excelData) => {
    const basicInfo = {
        numDoc: excelData[0] ? excelData[0].toString() : '',
        curState: excelData[1] === 'ACTIVO',
        joinDate: excelData[2] ? new Date((excelData[2] - 25569) * 86400 * 1000) : null,
        exitDate: excelData[3] ? new Date((excelData[3] - 25569) * 86400 * 1000) : null,
        enterBy: excelData[4] || '',
        reasonForExit: excelData[5] || '',
        otherExitReason: excelData[6] || '',
        unityName: excelData[7] || '',
        duoName: excelData[8] || '',
        teachers: excelData[9] ? excelData[9].split(',') : [],
        documentType: excelData[10] || '',
        firstName: excelData[11] || '',
        secondName: excelData[12] || '',
        firstLastName: excelData[13] || '',
        secondLastName: excelData[14] || '',
        gender: excelData[15] || ''
    };
    return basicInfo;
};

module.exports = processExcelData;