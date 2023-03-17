const read = require('./read');
const procesar = require('./process');
const saveHealth = require('./save');

const importFunction = (row) => {
    const data =  read(row);
    const processData = procesar(data);
    const saveData = saveHealth(processData);
    return saveData;
};

module.exports = importFunction;