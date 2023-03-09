const mongoose = require('mongoose');
const { Schema } = mongoose;
const basicInfoSchema = require("./beneficiaries/basicinfo");
const birthinformation = require("./beneficiaries/birthinformation");

const beneficiarySchema = new Schema({
    basicinfo: basicInfoSchema,
    birthinformation: birthinformation
});

const beneficiary = mongoose.model('beneficiary', beneficiarySchema);

module.exports = beneficiary;