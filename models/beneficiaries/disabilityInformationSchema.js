const mongoose = require('mongoose');

const disabilitySchema = new mongoose.Schema({
  disability: { type: String, required: true },
  certifiedDisability: { type: String, required: true },
  entityCertifiesDisability: { type: String, required: true },
  disabilityCategory: { type: String },
  specifiedDisability: { type: String },
  disabilityRegistryEnrollment: { type: String }
});

const Disability = mongoose.model('Disability', disabilitySchema);

module.exports = Disability;
