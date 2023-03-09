const mongoose = require('mongoose');

const AssistanceSchema = new mongoose.Schema({
  requiresAssistance: {
    type: String,
    default: false
  },
  requiresTechSupport: {
    type: String,
    default: false
  },
  hasTechSupport: {
    type: String,
    default: false
  },
  requiresTherapy: {
    type: String,
    default: false
  },
  receivesTherapy: {
    type: String,
    default: false
  },
  hasInterdictionProcess: {
    type: String,
    default: false
  }
});

module.exports = mongoose.model('Assistance', AssistanceSchema);
