const mongoose = require('mongoose');
const { Schema } = mongoose;

const disabilityInfoSchema = new Schema({
  disability: { type: Boolean,  },
  certifiedDisability: { type: Boolean,  },
  entityCertifiesDisability: { type: String,  },
  disabilityCategory: { type: String },
  specifiedDisability: { type: String },
  disabilityRegistryEnrollment: { type: Boolean, default: false },
});

module.exports = disabilityInfoSchema;
