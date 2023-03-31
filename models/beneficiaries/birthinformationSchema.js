const mongoose = require('mongoose');
const { Schema } = mongoose;
const calculateAge = require('./controller/calculateAge');
var moment = require('moment'); // require
moment().format(); 

const birthInfoSchema = new Schema({
    birthCountry: { type: String },
    birthDepartment: { type: String },
    birthMunicipality: { type: String },
    birthDate: { type: Date }
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

function getAgeField(type, fieldName) {
    return birthInfoSchema.virtual(fieldName).get(function () {
    const birthDate = new Date(this.birthDate);
    const age = calculateAge(birthDate);
    if (isNaN(age[type])) {
        return "FECHA DE NACIMIENTO DESCONOCIDA";
    }
        return age[type];
    });
}

getAgeField('years', 'ageYear');
getAgeField('months', 'ageMonth');
getAgeField('days', 'ageDay');

birthInfoSchema.virtual("totalAge").get(function () {
    const years = this.ageYear;
    const months = this.ageMonth;
    const days = this.ageDay;
    const yearString = years > 0 ? `${years} AÑOS ` : "";
    const monthString = months > 0 ? `${months} MESES ` : "";
    const dayString = days > 0 ? `${days} DIAS` : "";
    return yearString + monthString + dayString;
});

module.exports = birthInfoSchema;
