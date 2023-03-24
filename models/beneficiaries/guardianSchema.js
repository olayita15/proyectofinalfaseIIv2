const mongoose = require('mongoose')
const { Schema } = mongoose;
//miod

const guardianSchema = new Schema({
  guardianPersonType:{ type: String, enum: ['PADRE','MADRE','TIO(A)','HERMANO(A)','ABUELO(A)',
  'PADRASTRO','MADRASTRA','CONYUGE','AMIG(A)','OTRO'],  },
  guardianDocumentType: { type: String, enum: ['CC','TI','PEP','PASAPORTE','SINDOCUMENTO'],  },
  guardianDocumentNumber: { type: Number },
  guardianFirstName: { type: String },
  guardianSecondName: { type: String },
  guardianFirstLastName: { type: String },
  guardianSecondLastName: { type: String }, 
  guardianBirthDate: { type: Date },
  guardianBirthCountry:{ type: String, enum: ['COLOMBIA','VENEZUELA','PERU','ECUADOR','PANAMA','BRASIL'],  },
  guardianBirthDepartment: { type: String, enum: ['AMAZONAS','ANTIOQUIA','ARAUCA','ATLANTICO','BOGOTA','BOLIVAR',
  'BOYACA','CALDAS','CAQUETA','CASANARE',
  'CAUCA','CESAR','CHOCO',
  'CORDOBA','CUNDINAMARCA','ESPECIALES',
  'GUANIA','GUAVIARE','HUILA','LA_GUAJIRA','MAGDALENA',
  'META','NARIÑO','NORTEDESANTANDER','PUTUMAYO','QUINDIO',
  'RISARALDA','SANANDRESYPROVIDENCIA','SANTANDER','SUCRE',
  'TOLIMA','VALLEDELCAUCA','VAUPES','VICHADA'],  },
  guardianBirthCity: { type: String }
});

module.exports = guardianSchema;