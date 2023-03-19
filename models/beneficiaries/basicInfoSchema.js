const mongoose = require('mongoose');
const { Schema } = mongoose;

const basicInfoSchema = new Schema({
  numDoc: { type: String, unique: true, required: true },
  curState: { type: Boolean, required: true },
  joinDate: { type: Date, required: true },
  exitDate: { type: Date },
  enterBy: { type: String },
  reasonForExit: { type: String },
  otherExitReason: { type: String },
  unityName: { type: String, required: true },
  duoName: { type: String, required: true },
  teachers: { type: [String]},
  documentType: { type: String, required: true },
  firstName: { type: String, required: true },
  secondName: { type: String },
  firstLastName: { type: String, required: true },
  secondLastName: { type: String },
  gender: { type: String, enum: ['MASCULINO','FEMENINO'], required: true }
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    validateBeforeSave: true 
});

basicInfoSchema.index({ numDoc: 1 }, { unique: true });

basicInfoSchema.virtual("fullName").get(function () {
  const { firstName, secondName, firstLastName, secondLastName } = this;
  const fullName = `${firstName} ${secondName ? secondName + " " : ""}${firstLastName} ${secondLastName ? secondLastName : ""}`;
  return fullName.trim();
});

module.exports = basicInfoSchema;
