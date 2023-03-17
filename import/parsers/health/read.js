const readFunction = require('../controllers/readFunction');

const readHealth = (row)=>{
    const firstData = readFunction('90', '106', row);
    return firstData;
};

module.exports = readHealth;