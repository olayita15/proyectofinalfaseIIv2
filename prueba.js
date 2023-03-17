const prueba = require('./import/parsers/index.js');
const {globalVars, initGlobalVars} = require('./import/parsers/controllers/globalConst.js');

initGlobalVars('./import/download/beneficiariesBD.xls');
prueba(7);
