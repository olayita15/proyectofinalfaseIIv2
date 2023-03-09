const mongoose = require('mongoose');
const { Schema } = mongoose;

const basicInfoSchema = new Schema({
    numDoc: { type: String, required: true },
    curState: { type: String, required: true },
    joinDate: { type: Date, required: true },
    exitDate: { type: Date },
    enterBy: { type: String },
    reasonForExit: { type: String },
    otherExitReason: { type: String },
    unityName: { type: String },
    duoName: { type: String },
    documentType: { type: String },
    firstName: { type: String },
    secondName: { type: String },
    firstLastName: { type: String },
    secondLastName: { type: String },
    gender: { type: String }
});

module.exports = basicInfoSchema;
