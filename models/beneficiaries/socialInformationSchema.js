const mongoose = require('mongoose');
const { Schema } = mongoose;

const socialInformationSchema = new Schema({
  groupEthnicity: { type: String, required: false },
  beneficiarySisbenized: { type: Boolean, required: false },
<<<<<<< HEAD
  sisbenScore: { type: String, required: false }, 
=======
  sisbenScore: { type: String, required: false },
>>>>>>> 146e4d49547a926e3e9362c18b4af726bc17a889
  belongsToFamiliesInAction: { type: Boolean, required: false },
  directlyAffectedByArmedConflict: { type: Boolean, required: false },
  focusingCriteria: { type: String, required: false },
  justificationDocumentExists: { type: Boolean, required: false }
});

module.exports = socialInformationSchema;