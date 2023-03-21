const mongoose = require('mongoose')
const { Schema } = mongoose;
//miod

const guardianSchema = new Schema({
  guardianPersonType: { type: String },
  guardianDocumentType: { type: String },
  guardianDocumentNumber: { type: Number },
  guardianFirstName: { type: String },
  guardianSecondName: { type: String },
  guardianFirstLastName: { type: String },
  guardianSecondLastName: { type: String }, 
  guardianBirthDate: { type: Date },
  guardianBirthCountry: { type: String },
  guardianBirthDepartment: { type: String },
  guardianBirthCity: { type: String }
});

module.exports = guardianSchema;