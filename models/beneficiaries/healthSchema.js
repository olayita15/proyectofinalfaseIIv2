const mongoose = require('mongoose');
const { Schema } = mongoose;

const healthSchema = new mongoose.Schema({
  regime: {
    type: String,
    required: true
  },
  eps: {
    type: String,
    required: true
  },
  hasVaccinationCard: {
    type: Boolean,
    required: true
  },
  vaccinationVerificationDate: {
    type: Date
  },
  vaccinationCardUpToDate: {
    type: Boolean
  },
  hasGrowthAndDevelopmentCard: {
    type: Boolean,
    required: true
  },
  growthDevelopmentControlsReceived: {
    type: Number
  },
  prematurenessBackground: {
    type: Boolean
  },
  under40Weeks: {
    type: Boolean
  },
  cefalicProfile: {
    type: String
  },
  gestationalAgeAtBirth: {
    type: Number
  },
  weightAtBirth: {
    type: Number
  },
  heightAtBirth: {
    type: Number
  },
  exclusivelyBreastfeeding: {
    type: Boolean
  },
  exclusiveBreastfeedingDuration: {
    type: Number
  },
  totalBreastfeedingDuration: {
    type: Number
  },
  gestationWeeks: {
    type: Number
  },
  ticketNumber: {
    type: String
  }
});

module.exports = healthSchema
