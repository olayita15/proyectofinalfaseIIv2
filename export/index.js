const XlsxPopulate = require('xlsx-populate');
const {editHeader} = require('./templates/header/index');
const {getFoodNames} = require('./templates/content/market/getFoodNames');
const {getNutricionalNames} = require('./templates/content/market/getNutricionalNames');
const {getBeneficiary} = require('./templates/content/beneficiary/getBeneficiary');
const {getFoodCant} = require('./templates/content/market/getFoodCant');
const {getNutricionalCant} = require('./templates/content/market/getNutricionalCant');
const {getMarketBeneficiary} = require('./templates/content/beneficiary/getMarketBeneficiary');

exports.exportExcel = async (pathFile, info) => {
XlsxPopulate.fromFileAsync(pathFile)
  .then(async workbook => {
    const worksheet = workbook.sheet('ENTREGA DE  COMPLEMENTOS');
    //Header
    let cell = worksheet.row(4).cell(1);
    const newHeader = editHeader(info.data)
    cell.value(newHeader);
    //Market Content
    for (let row = 0; row < info.beneficiaries.length; row++) {
      const beneficiaryInfo = await getBeneficiary(info.beneficiaries[row]);
      const marketBeneficiary = getMarketBeneficiary(beneficiaryInfo);
      console.log(beneficiaryInfo);
      console.log(marketBeneficiary);
      const FoodNames = await getFoodNames(marketBeneficiary);
      for (let index = 10; index < 21; index++) {
        cell = worksheet.row(8).cell(index);
        cell.value(FoodNames[index-10]);
      }

      const NutricionalNames = await getNutricionalNames(marketBeneficiary);
      for (let index = 21; index < 22; index++) {
        cell = worksheet.row(8).cell(index);
        cell.value(NutricionalNames[index-21]);
      }

      for (let col = 2; col < 5; col++) {
        cell = worksheet.row(row+10).cell(col);
        cell.value(beneficiaryInfo[col-2]);
      }

      if (beneficiaryInfo[3]==0) {
        cell = worksheet.row(row+10).cell(6);
        cell.value('X');
      } 
      else if (beneficiaryInfo[3]==1) {
        cell = worksheet.row(row+10).cell(7);
        cell.value('X');
      }
      else if (beneficiaryInfo[3]==2) {
        cell = worksheet.row(row+10).cell(8);
        cell.value('X');
      }
      else {
        cell = worksheet.row(row+10).cell(9);
        cell.value('X');
      }

      const FoodCant = await getFoodCant(marketBeneficiary);
      for (let index = 10; index < 21; index++) {
        cell = worksheet.row(row+10).cell(index);
        cell.value(FoodCant[index-10]);
      }

      const NutricionalCant = await getNutricionalCant(marketBeneficiary);
      for (let index = 21; index < 22; index++) {
        cell = worksheet.row(row+10).cell(index);
        cell.value(NutricionalCant[index-21]);
      }
    }

    workbook.toFileAsync('./export/upload/modificado.xlsx');
    // return workbook.toFileAsync('archivo_modificado.xlsx'); 
  })
  .catch(error => {
    console.error(error);
  });
}