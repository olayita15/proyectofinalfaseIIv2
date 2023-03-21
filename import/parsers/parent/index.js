const read = require('./read');
const procesar = require('./process');
const saveParent = require('./save');

const importFunction = (row) => {
    const data =  read(row);
    const processData = procesar(data);
    const saveData = saveParent(processData);
    return saveData;
};

module.exports = importFunction;