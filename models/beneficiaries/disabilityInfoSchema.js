const mongoose = require('mongoose');

const disabilityInfoSchema = new mongoose.Schema({
  disability: { type: Boolean, required: true },
  certifiedDisability: { type: Boolean, required: true },
  entityCertifiesDisability: { type: String, required: true },
  disabilityCategory: { type: String },
  specifiedDisability: { type: String },
  disabilityRegistryEnrollment: { type: Boolean, default: false },
});

module.exports = disabilityInfoSchema;
///waal 