const mongoose = require('mongoose');
const { Schema } = mongoose;


const basicInfoSchema = new mongoose.Schema({
  numDoc: {
    type: String,
    unique: true,
    required: true
  },  
  curState: {
    type: String,
    required: true
  },
  joinDate: {
    type: Date,
    required: true
  },
  exitDate: {
    type: Date,
  },
  enterBy: {
    type: String,
  },
  reasonForExit: {
    type: String,
  },
  otherExitReason: {
    type: String,
    
  },
  unityName: {
    type: String,
    required: true
  },  ////////////CHECK///////////////////////
  duoName: {
    type: String,
    required: true
  },
  teachers: {
    type: String,
  },

  documentType: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  secondName: {
    type: String
  },
  firstLastName: {
    type: String,
    required: true
  },
  secondLastName: {
    type: String
  },
  ////////////CHECK///////////////////////
  gender: {
    type: String,
    required: true
  }  
});

module.exports = basicInfoSchema;
