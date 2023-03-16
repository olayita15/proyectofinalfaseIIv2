const mongoose = require('mongoose')
const { Schema } = mongoose;
//miod

const guardianSchema = new Schema({
  guardianPersonType: { type: String, required: true },
  guardianDocumentType: { type: String },
  guardianDocumentNumber: { type: String },
  guardianFirstName: { type: String },
  guardianSecondName: { type: String },
  guardianFirstLastName: { type: String },
  guardianSecondLastName: { type: String }, 
  guardianBirthdate: { type: Date },
  guardianBirthCountry: { type: String },
  guardianBirthDepartment: { type: String },
  guardianBirthCity: { type: String }
});

module.exports = guardianSchema;