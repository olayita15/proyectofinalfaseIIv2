const moment = require('moment');
const calculateAge = require('./calculateAge');


function calculateComplement(birthDate) {
    const age =calculateAge(birthDate);
    if (age.years === 0 && age.months < 6) {
      return "M. GESTANTE Y MADRES LACTANTES (MENOR DE 6 MESES)";
    } else if (age.years < 1 && age.months > 6) {
      return "NIÑOS Y NIÑAS DE 6 MESES A 11 MESES Y 29 DÍAS";
    } else if (age.years >= 1 && age.years < 3) {
      return "NIÑOS Y NIÑAS MAYORES A 1 AÑOS";
    } else if (age.years >= 3 && age.years < 5) {
      return "MAYORES A 3 AÑOS";
    } else {
      return "EDAD NO DISPONIBLE";
    }
  }


  module.exports = calculateComplement;

  