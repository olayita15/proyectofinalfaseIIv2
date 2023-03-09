const mongoose = require('mongoose');
const { Schema } = mongoose;
const basicInfoSchema = require("./beneficiaries/basicinfoSchema");
const birthinformation = require("./beneficiaries/birthinformationSchema");

const beneficiarySchema = new Schema({
    basicinfo: basicInfoSchema,
    birthinformation: birthinformation
});

const beneficiary = mongoose.model('beneficiary', beneficiarySchema);

module.exports = beneficiary;