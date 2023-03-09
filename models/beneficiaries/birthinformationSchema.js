const mongoose = require('mongoose');
const { Schema } = mongoose;

const birthInfoSchema = new Schema({
    birthCountry: { type: String },
    birthDepartment: { type: String },
    birthMunicipality: { type: String },
    birthDate: { type: Date }
});

module.exports = birthInfoSchema;
