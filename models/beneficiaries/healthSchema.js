const mongoose = require('mongoose');
const { Schema } = mongoose;

const healthSchema = new Schema({
  regime: { type: String, enum: ['SUBSIDIADO', 'CONTRIBUTIVO', 'ESPECIAL', 'NO_AFILIADO'], required: true },
  eps: { type: String },
  hasVaccinationCard: { type: Boolean },
  vaccinationVerificationDate: { type: Boolean },
  vaccinationCardUpToDate: { type: Boolean },
  hasGrowthAndDevelopmentCard: { type: Boolean},
  growthDevelopmentControlsReceived: { type: String },
  prematurenessBackground: { type: Boolean },
  under40Weeks: { type: Boolean },
  cefalicProfile: { type: String },
  gestationalAgeAtBirth: { type: Number },
  weightAtBirth: { type: Number },
  heightAtBirth: { type: Number },
  exclusivelyBreastfeeding: { type: Boolean },
  exclusiveBreastfeedingDuration: { type: Number },
  totalBreastfeedingDuration: { type: Number },
  gestationWeeks: { type: Number },
  ticketNumber: { type: String }
});

module.exports = healthSchema
