const processExcelData =  (excelData) => {
    if(excelData[12]!==null){
        if(excelData[12] !== null){
            const matchResult = excelData[12].toString().match(/\d+/);
            if (matchResult !== null) {
                excelData[12] = matchResult[0];
            }
        };
    };
    if(excelData[13]!==null){
        if(excelData[13] !== null){
            const matchResult = excelData[13].toString().match(/\d+/);
            if (matchResult !== null) {
                excelData[13] = matchResult[0];
            }
        };
    }

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
        weightAtBirth: excelData[12] || 0,
        heightAtBirth: excelData[13] || 0,
        exclusivelyBreastfeeding: excelData[14] === 'SI_',
        exclusiveBreastfeedingDuration: excelData[15] || 0,
        totalBreastfeedingDuration: excelData[16] || 0,
        gestationWeeks: excelData[17] || 0,
        ticketNumber: excelData[18] || ''
        
    };
    return healthInfo;
};

module.exports = processExcelData;