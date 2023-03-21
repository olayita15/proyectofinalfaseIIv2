const prueba = require('./export/index');

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
prueba.prueba('./export/upload/prueba.xlsx', datos);
