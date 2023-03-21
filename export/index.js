const XlsxPopulate = require('xlsx-populate');
const {editHeader} = require('./templates/header/index');
const {getFoodNames} = require('./templates/content/market/getFoodNames');
const {getNutricionalNames} = require('./templates/content/market/getNutricionalNames');
const {getBeneficiary} = require('./templates/content/beneficiary/getBeneficiary');

exports.exportExcel = async (pathFile, dataHeader) => {
XlsxPopulate.fromFileAsync(pathFile)
  .then(async workbook => {
    // Obtener la hoja de cálculo y la celda
    const worksheet = workbook.sheet('ENTREGA DE  COMPLEMENTOS');
    //Header
    // const cell = worksheet.row(4).cell(1);
    // const newHeader = editHeader(dataHeader)
    // // Modificar el contenido de la celda
    // cell.value(newHeader);
    //Market Content
    const FoodNames = await getFoodNames('GESTANTES LACTANTES');
    for (let index = 10; index < 21; index++) {
      cell = worksheet.row(8).cell(index);
      cell.value(FoodNames[index-10]);
    }

    const NutricionalNames = await getNutricionalNames('GESTANTES LACTANTES');
    for (let index = 21; index < 22; index++) {
      cell = worksheet.row(8).cell(index);
      cell.value(NutricionalNames[index-21]);
    }

    const beneficiary = await getBeneficiary('1023004072')
    console.log(beneficiary[0].basicinfo.fullName)
    console.log(beneficiary[0].basicinfo.numDoc)
    console.log(beneficiary[0].basicinfo.joinDate)
    
    // Guardar el archivo modificado
    workbook.toFileAsync('./export/upload/modificado.xlsx');
    // return workbook.toFileAsync('archivo_modificado.xlsx');
  })
  .catch(error => {
    console.error(error);
  });
}