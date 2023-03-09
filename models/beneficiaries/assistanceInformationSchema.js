const mongoose = require('mongoose');

const AssistanceSchema = new mongoose.Schema({
  requiresAssistance: {
    type: Boolean,
    default: false
  },
  requiresTechSupport: {
    type: Boolean,
    default: false
  },
  hasTechSupport: {
    type: Boolean,
    default: false
  },
  requiresTherapy: {
    type: Boolean,
    default: false
  },
  receivesTherapy: {
    type: Boolean,
    default: false
  },
  hasInterdictionProcess: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Assistance', AssistanceSchema);
