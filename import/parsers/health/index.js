const read = require('./read');
const procesar = require('./process');
const saveBasicInfo = require('./save');

const importFunction = (row) => {
    const data =  read(row);
    const processData = procesar(data);
    const saveData = saveBasicInfo(processData);
    return saveData;
};

module.exports = importFunction;