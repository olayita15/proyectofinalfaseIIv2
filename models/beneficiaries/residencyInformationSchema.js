const mongoose = require('mongoose');
const { Schema } = mongoose;

const residencyInformationSchema = new Schema({
  countryOfResidence: { type: String, },
  residenceDepartment: { type: String, },
  locationZone: { type: String, },
  headerType: { type: String },
  localityName: { type: String },
  neighborhood: { type: String },
  foreignZoneName: { type: String },
  address: { type: String,  },
  primaryPhone: { type: String },
  secondaryPhone: { type: String },
  householdStratum: { type: Number }
});

module.exports = residencyInformationSchema;