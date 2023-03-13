const mongoose = require('mongoose')
//miod

const guardianSchema = new mongoose.Schema({
  guardianPersonType: {
    type: String,
    required: true
  },
  guardianDocumentType: {
    type: String,
    required: true
  },
  guardianDocumentNumber: {
    type: String,
    required: true
  },
  guardianFirstName: {
    type: String,
    required: true
  },
  guardianSecondName: {
    type: String,
    required: false
  },
  guardianFirstLastName: {
    type: String,
    required: true
  },
  guardianSecondLastName: {
    type: String,
    required: true
  },
  guardianBirthdate: {
    type: Date,
    required: true
  },
  guardianBirthCountry: {
    type: String,
    required: true
  },
  guardianBirthDepartment: {
    type: String,
    required: true
  },
  guardianBirthCity: {
    type: String,
    required: true
  }
});

module.exports = guardianSchema;