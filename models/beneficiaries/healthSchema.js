const mongoose = require('mongoose');
const { Schema } = mongoose;

const healthSchema = new Schema({
  regime: { type: String, enum: ['SUBSIDIADO', 'CONTRIBUTIVO', 'ESPECIAL', 'NO_AFILIADO'], required: true },
  eps: { type: String },
  hasVaccinationCard: {type: Boolean, default: false},
  vaccinationVerificationDate: { type: Boolean, default: false},
  vaccinationCardUpToDate: {type: Boolean, default: false},
  hasGrowthAndDevelopmentCard: {type: Boolean, default: false},
  growthDevelopmentControlsReceived: { type: String },
  prematurenessBackground: { type: Boolean, default: false},
  under40Weeks: { type: Boolean, default: false },
  cefalicProfile: { type: String },
  gestationalAgeAtBirth: { type: Number },
  weightAtBirth: { type: Number },
  heightAtBirth: { type: Number },
  exclusivelyBreastfeeding: {type: Boolean, default: false },
  exclusiveBreastfeedingDuration: { type: Number },
  totalBreastfeedingDuration: { type: Number },
  gestationWeeks: { type: Number },
  ticketNumber: { type: String }
});

module.exports = healthSchema
