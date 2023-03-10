const mongoose = require('mongoose');
const { Schema } = mongoose;

const socialInformationSchema = new Schema({
  groupEthnicity: {
    type: String,
    required: false
  },
  beneficiarySisbenized: {
    type: Boolean,
    required: false
  },
  sisbenScore: {
    type: Number,
    required: false
  },
  belongsToFamiliesInAction: {
    type: Boolean,
    required: false
  },
  directlyAffectedByArmedConflict: {
    type: Boolean,
    required: false
  },
  focusingCriteria: {
    type: String,
    required: false
  },
  justificationDocumentExists: {
    type: Boolean,
    required: false
  }
});


module.exports = socialInformationSchema;