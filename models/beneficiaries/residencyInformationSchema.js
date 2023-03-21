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
<<<<<<< HEAD
  address: { type: String,  },
=======
  address: { type: String },
>>>>>>> 146e4d49547a926e3e9362c18b4af726bc17a889
  primaryPhone: { type: String },
  secondaryPhone: { type: String },
  householdStratum: { type: Number }
});

module.exports = residencyInformationSchema;