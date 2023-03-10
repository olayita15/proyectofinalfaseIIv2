// beneficiarySchema.virtual("beneficiaryType").get(function () {
//     const birthDate = new Date(this.birthDate);
//     const ageInMonths = calculateAgeInMonths(birthDate);

//     if (isNaN(ageInMonths)) {
//         return "FECHA DE NACIMIENTO DESCONOCIDA";
//     }
//     if (ageInMonths < 6) {
//         return "MENOR DE 6 MESES";
//     }
//     if (ageInMonths < 72) {
//         return "NIÑO O NIÑA ENTRE 6 MESES Y 5 AÑOS Y 11 MESES";
//     }
//     if (ageInMonths > 120) {
//         return "MUJER GESTANTE";
//     }
//     return "EDAD DESCONOCIDA";
// });

// function calculateAgeInMonths(birthDate) {
//         const now = moment();
//         const birthDateMoment = moment(birthDate); 
//         if (!birthDateMoment.isValid()) {
//         return NaN;
//         }
//         return now.diff(birthDateMoment, 'months');
// };