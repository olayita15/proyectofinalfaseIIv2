const Beneficiary = require('../../../../models/beneficiaries');
const {getDateFormat} = require('./getDateFormat');

exports.getBeneficiary = async (numDoc) => {
    try {
        const beneficiaryArray = [];
        const beneficiary = await Beneficiary.find({ 'basicinfo.numDoc': numDoc });
        if (!beneficiary) {
            return null;
        }
        beneficiaryArray.push(beneficiary[0].basicinfo.fullName);
        beneficiaryArray.push(beneficiary[0].basicinfo.numDoc);
        const dateFormate = getDateFormat(beneficiary[0].basicinfo.joinDate)
        beneficiaryArray.push(dateFormate);
        if (beneficiary[0].typeComplement.trim() == 'M. GESTANTES Y MADRES LACTANTES (MENOR DE 6 MESES)'|| beneficiary[0].typeBeneficiary.trim() == 'MUJER GESTANTE'){
            beneficiaryArray.push(0);
        }  
        else if (beneficiary[0].typeComplement.trim() == 'NIÑOS Y NIÑAS DE 6 MESES A 11 MESES 29 DIAS'){
            beneficiaryArray.push(1);
        }
        else if (beneficiary[0].typeComplement.trim() == 'NIÑOS Y NIÑAS MAYORES DE 1 AÑO'){
            beneficiaryArray.push(2);
        }
        else if (beneficiary[0].typeComplement.trim() == 'MAYORES A 3 AÑOS') {
            beneficiaryArray.push(3);
        }
        return beneficiaryArray;
    } catch (error) {
        console.log(error);
        return null;
    }
};