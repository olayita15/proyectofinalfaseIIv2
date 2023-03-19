const XlsxPopulate = require('xlsx-populate');
const {editHeader} = require('./templates/header/index');

exports.prueba = async (pathFile, dataHeader) => {
XlsxPopulate.fromFileAsync(pathFile)
  .then(workbook => {
    // Obtener la hoja de cálculo y la celda
    const worksheet = workbook.sheet('ENTREGA DE  COMPLEMENTOS');
    const cell = worksheet.cell('A4');
    // const richText = cell.value();
    const newHeader = editHeader(dataHeader)
    // console.log(text); // Mostrará el contenido de la celda
    // Modificar el contenido de la celda
    cell.value(newHeader);

    // Guardar el archivo modificado
    workbook.toFileAsync('./export/upload/modificado.xlsx');
    // return workbook.toFileAsync('archivo_modificado.xlsx');
  })
  .catch(error => {
    console.error(error);
  });
}