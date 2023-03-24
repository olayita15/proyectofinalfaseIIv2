const mongoose = require('mongoose');
const { Schema } = mongoose;

const residencyInformationSchema = new Schema({
  countryOfResidence: { type: String, },
  residenceDepartment: { type: String, },
  locationZone:  { type: String, enum: ['CABECERA','RESTO'],  },
  headerType:  { type: String, enum: ['LOCALIDAD','COMUNA','NO APLICA'],  },
  localityName: { type: String, enum: ['ANTONIO_NARIÑO','BARRIOS_UNIDOS','BOSA',
  'CHAPINERO','CIUDAD_BOLIVAR','ENGATIVA',
  'FONTIBON','KENNEDY','LA_CANDELARIA','LOS_MARTIRES',
  'PUENTE ARANDA','RAFAEL_URIBE_URIBE','SAN CRISTOBAL',
  'SANTA_FE','SUBA','SUMAPAZ',
  'TEUSAQUILLO','TUNJUELITO','USQUEN','USME'],  },
  neighborhood: { type: String },
  foreignZoneName: { type: String },
  address: { type: String },
  primaryPhone: { type: String },
  secondaryPhone: { type: String },
  householdStratum: { type: Number }
});

module.exports = residencyInformationSchema;