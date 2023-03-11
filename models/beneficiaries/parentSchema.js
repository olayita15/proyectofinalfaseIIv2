const mongoose = require('mongoose');
const { Schema } = mongoose;
const calculateAge = require('./controller/calculateAge');

const parentSchema = new Schema({
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
///waal