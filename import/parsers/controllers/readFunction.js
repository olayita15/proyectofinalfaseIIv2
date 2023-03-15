const xlsx = require('xlsx');
const { globalVars } = require('./globalConst')

// function readFunction(columnaInicial, columnaFinal) {
//   const hoja = globalVars.sheet;
//   let filaActual = 7;
//   const datos = [];
//   let columna;

//   for (columna = columnaInicial; columna <= columnaFinal; columna++) {
//     const valorCelda = hoja[xlsx.utils.encode_cell({r: filaActual, c: columna})];
//     if (valorCelda && valorCelda.t !== 'z' && valorCelda.t !== 'e') {
//       datos.push(valorCelda.v);
//     } else {
//       datos.push(null);
//     }    
//   }
//   return datos;
// };

function readFunction(startCol, endCol, row) {
  const sheet = globalVars.sheet;
  const data = [];
  let col;

  for (col = startCol; col <= endCol; col++) {
    const cellValue = sheet[xlsx.utils.encode_cell({r: row, c: col})];
    if (cellValue && cellValue.t !== 'z' && cellValue.t !== 'e') {
      data.push(cellValue.v);
    } else {
      data.push(null);
    }    
  }
  return data;
};
module.exports = readFunction;