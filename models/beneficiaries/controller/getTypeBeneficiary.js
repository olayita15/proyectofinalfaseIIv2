const calculateAge = require('./calculateAge');


function calculateType(birthDate) {
    const age = calculateAge(birthDate);
    if (age.years >= 10) {
        return "MUJER GESTANTE";
    } else if (age.months < 6 ) {
        return "MENOR DE SEIS MESES";
    } else if ( age.years < 6 ) {
        return "NIÑA O NIÑO ENTRE 6 MESES Y 5 AÑOS Y 11 MESES";
    } else if ( age.years >= 6 && age.years < 10) {
        return "NIÑO/NIÑA ENTRE 6 AÑOS Y 9 AÑOS Y 11 MESES";
    } else {
        return "EDAD NO DISPONIBLE";
    }
};


module.exports = calculateType;