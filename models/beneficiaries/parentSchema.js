const mongoose = require('mongoose');

const parentSchema = new mongoose.Schema({
  fatherDocumentType: { type: String },
  fatherDocumentNumber: { type: Number },
  fatherFirstName: { type: String },
  fatherSecondName: { type: String },
  fatherFirstLastname: { type: String },
  fatherSecondLastname: { type: String },
  fatherBirthdate: { type: Date },
  fatherBirthCountry: { type: String },
  fatherBirthDepartment: { type: String },
  fatherBirthCity: { type: String },
  motherDocumentType: { type: String },
  motherDocumentNumber: { type: Number },
  motherFirstName: { type: String },
  motherSecondName: { type: String },
  motherFirstLastname: { type: String },
  motherSecondLastname: { type: String },
  motherBirthdate: { type: Date },
  motherBirthCountry: { type: String },
  motherBirthDepartment: { type: String },
  motherBirthCity: { type: String },
});

module.exports = parentSchema;


///waal