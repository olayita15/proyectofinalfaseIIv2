const mongoose = require('mongoose');
const { Schema } = mongoose;
const calculateAge = require('./controller/calculateAge');

const parentSchema = new Schema({
  fatherDocumentType: { type: String, enum: ['CC','TI','PEP','PASAPORTE','SINDOCUMENTO'],  },
  fatherDocumentNumber: { type: String },
  fatherFirstName: { type: String },
  fatherSecondName: { type: String },
  fatherFirstLastname: { type: String },
  fatherSecondLastname: { type: String },
  fatherBirthdate: { type: Date },
  fatherBirthCountry: { type: String, enum: ['COLOMBIA','VENEZUELA','PERU','ECUADOR','PANAMA','BRASIL'],  },
  fatherBirthDepartment: { type: String, enum: ['AMAZONAS','ANTIOQUIA','ARAUCA','ATLANTICO','BOGOTA','BOLIVAR',
  'BOYACA','CALDAS','CAQUETA','CASANARE',
  'CAUCA','CESAR','CHOCO',
  'CORDOBA','CUNDINAMARCA','ESPECIALES',
  'GUANIA','GUAVIARE','HUILA','LA_GUAJIRA','MAGDALENA',
  'META','NARIÑO','NORTEDESANTANDER','PUTUMAYO','QUINDIO',
  'RISARALDA','SANANDRESYPROVIDENCIA','SANTANDER','SUCRE',
  'TOLIMA','VALLEDELCAUCA','VAUPES','VICHADA'],  },
  fatherBirthCity: { type: String },
  motherDocumentType:{ type: String, enum: ['CC','TI','PEP','PASAPORTE','SINDOCUMENTO'],  },
  motherDocumentNumber: { type: String },
  motherFirstName: { type: String },
  motherSecondName: { type: String },
  motherFirstLastname: { type: String },
  motherSecondLastname: { type: String },
  motherBirthdate: { type: Date },
  motherBirthCountry: { type: String, enum: ['COLOMBIA','VENEZUELA','PERU','ECUADOR','PANAMA','BRASIL'],  },
  motherBirthDepartment:{ type: String, enum: ['AMAZONAS','ANTIOQUIA','ARAUCA','ATLANTICO','BOGOTA','BOLIVAR',
  'BOYACA','CALDAS','CAQUETA','CASANARE',
  'CAUCA','CESAR','CHOCO',
  'CORDOBA','CUNDINAMARCA','ESPECIALES',
  'GUANIA','GUAVIARE','HUILA','LA_GUAJIRA','MAGDALENA',
  'META','NARIÑO','NORTEDESANTANDER','PUTUMAYO','QUINDIO',
  'RISARALDA','SANANDRESYPROVIDENCIA','SANTANDER','SUCRE',
  'TOLIMA','VALLEDELCAUCA','VAUPES','VICHADA'],  },
  motherBirthCity: { type: String },
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

parentSchema.virtual('ageFather').get(function() {
  const age = calculateAge(this.fatherBirthdate);
  return age.years;
});

parentSchema.virtual('ageMother').get(function() {
  const age = calculateAge(this.motherBirthdate);
  return age.years;
});

module.exports = parentSchema;
