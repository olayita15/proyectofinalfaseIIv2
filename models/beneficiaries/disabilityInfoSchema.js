const mongoose = require('mongoose');
const { Schema } = mongoose;

const disabilityInfoSchema = new Schema({
  disability: { type: Boolean, default: false },
  certifiedDisability: { type: Boolean, default: false },
  entityCertifiesDisability: { type: String,  },
  disabilityCategory: { type: String },
  specifiedDisability: { type: String },
  disabilityRegistryEnrollment: { type: Boolean, default: false },
});

module.exports = disabilityInfoSchema;
