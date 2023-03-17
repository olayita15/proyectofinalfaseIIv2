const mongoose = require('mongoose');
const { Schema } = mongoose;

const basicInfoSchema = new Schema({
  numDoc: { type: String, unique: true, required: true },
  curState: { type: Boolean, },
  joinDate: { type: Date,  },
  exitDate: { type: Date },
  enterBy: { type: String },
  reasonForExit: { type: String },
  otherExitReason: { type: String },
  unityName: { type: String,  },
  duoName: { type: String,  },
  teachers: { type: [String]},
  documentType: { type: String, },
  firstName: { type: String,  },
  secondName: { type: String },
  firstLastName: { type: String, },
  secondLastName: { type: String },
  gender: { type: String, enum: ['MASCULINO','FEMENINO'],  }
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

basicInfoSchema.virtual("fullName").get(function () {
  const { firstName, secondName, firstLastName, secondLastName } = this;
  const fullName = `${firstName} ${secondName ? secondName + " " : ""}${firstLastName} ${secondLastName ? secondLastName : ""}`;
  return fullName.trim();
});

module.exports = basicInfoSchema;
