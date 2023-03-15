const xlsx = require('xlsx');

// Objeto para almacenar las variables globales
const globalVars = {
  workbook: null,
  sheet: null,
  lastRow: null,
  row: 7
};

// Función para inicializar las variables globales
const initGlobalVars = (pathFile) => {
  globalVars.workbook = xlsx.readFile(pathFile);
  globalVars.sheet = globalVars.workbook.Sheets['MATRIZ PRINCIPAL'];
  globalVars.lastRow = globalVars.sheet['!ref'].split(':').pop().replace(/\D/g, '');
};

// Exporta el objeto globalVars como un módulo
module.exports = {globalVars, initGlobalVars};
