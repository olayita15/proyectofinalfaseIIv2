const moment = require('moment');

function calculateAge(birthDate) {
    const now = moment();
    const birthDateMoment = moment(birthDate);
    const age = {};

    if (!birthDateMoment.isValid()) {
        age.years = NaN;
        age.months = NaN;
        age.days = NaN;
        age.total = "";
        return age;
    }
    age.years = now.diff(birthDateMoment, "years");
    birthDateMoment.add(age.years, "years");
    age.months = now.diff(birthDateMoment, "months");
    birthDateMoment.add(age.months, "months");
    age.days = now.diff(birthDateMoment, "days");
    age.total = `${age.years} AÑOS ${age.months} MESES ${age.days} DIAS`;
    return age;
};

module.exports = calculateAge;
