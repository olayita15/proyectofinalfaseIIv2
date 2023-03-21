/*const prueba = require('./export/index');

const datos = {
    regional_ciudad: 'Bogotá',
    centro_zonal: 'Usme',
    municipio: '',
    modalidad: '',
    servicio: '',
    mes_entrega: '',
    unidad: '',
    dupla: '',
    direccion_punto_entrega: '',
    codigo_punto_entrega: ''
}
// prueba.prueba('./export/upload/excelExport.xlsx','./export/upload/excelExport-copy.xlsx', data);
prueba.prueba('./export/upload/prueba.xlsx', datos);*/

const prueba = require('./import/parsers/index.js');
const {globalVars, initGlobalVars} = require('./import/parsers/controllers/globalConst.js');

initGlobalVars('./import/download/beneficiariesBD.xls');
prueba(7);
