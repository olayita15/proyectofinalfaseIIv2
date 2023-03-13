const mongoose = require('mongoose');
const { Schema } = mongoose;

const disabilityInfoSchema = new Schema({
  disability: { type: Boolean, required: true },
  certifiedDisability: { type: Boolean, required: true },
  entityCertifiesDisability: { type: String, required: true },
  disabilityCategory: { type: String },
  specifiedDisability: { type: String },
  disabilityRegistryEnrollment: { type: Boolean, default: false },
});

module.exports = disabilityInfoSchema;
///waal 