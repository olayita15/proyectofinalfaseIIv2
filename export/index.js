const XlsxPopulate = require('xlsx-populate');
const {editHeader} = require('./templates/header/index');
const {getFoodNames} = require('./templates/content/market/getFoodNames');

exports.prueba = async (pathFile, dataHeader) => {
XlsxPopulate.fromFileAsync(pathFile)
  .then(async workbook => {
    // Obtener la hoja de cálculo y la celda
    const worksheet = workbook.sheet('ENTREGA DE  COMPLEMENTOS');
    const cell = worksheet.row(4).cell(1);
    const newHeader = editHeader(dataHeader)
    // Modificar el contenido de la celda
    cell.value(newHeader);
    const FoodNames = await getFoodNames('GESTANTES LACTANTES');
    for (let index = 10; index < 21; index++) {
      cell = worksheet.row(8).cell(index);
      cell.value(FoodNames[index-10]);
    }

    // Guardar el archivo modificado
    workbook.toFileAsync('./export/upload/modificado.xlsx');
    // return workbook.toFileAsync('archivo_modificado.xlsx');
  })
  .catch(error => {
    console.error(error);
  });
}