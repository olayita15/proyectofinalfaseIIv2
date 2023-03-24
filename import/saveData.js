const Beneficiary = require('../models/beneficiaries');
const beneficiary = require('./parsers/beneficiary');
const index = require('./parsers/index');
const { initGlobalVars, globalVars } = require('./parsers/controllers/globalConst');


var percent = '';
const saveData = async (path) => {
    initGlobalVars(path);
    let failedBeneficiaries = [];
    const totalRows = globalVars.lastRow - globalVars.row;
    
    for (let row = globalVars.row; row <= globalVars.lastRow-1; row++){
        index(row);
        try {
            const existingBeneficiary = await Beneficiary.find({ 'basicinfo.numDoc': beneficiary.basicinfo.numDoc });
            if (existingBeneficiary.length > 0) {
                console.log(`Beneficiary with identification number ${existingBeneficiary[0].basicinfo.numDoc} already exists, skipping...`);
                failedBeneficiaries.push({ numDoc: existingBeneficiary[0].basicinfo.numDoc, error: 'Beneficiary already exists' });
                continue;
            };   
            const savedBeneficiary = await Beneficiary.create(beneficiary);
            /*console.log('Datos insertados:', savedBeneficiary);*/
        } catch (error) {
            // console.log('Error:', error.message);
            failedBeneficiaries.push({ numDoc: beneficiary.basicinfo.numDoc, error: error.message });
        }

        // Calcular y mostrar porcentaje completado
        const percentCompleted = ((row - globalVars.row) / totalRows) * 100;
        percent = `${percentCompleted.toFixed(1)}%`;
        // io.on("connection", (socket) => {
        //     socket.emit("import-progress", { percent });
        // });
        console.log(percent)
    }
    console.log('Todo ha sido un exito');
    console.log(failedBeneficiaries);
};

module.exports = {saveData, percent};
