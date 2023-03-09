const mongoose = require('mongoose');
const { Schema } = mongoose;
const basicInfoSchema = require("./beneficiaries/basicInfoSchema");
const birthInfoSchema = require("./beneficiaries/birthinformationSchema");

const beneficiarySchema = new Schema({
    basicinfo: basicInfoSchema,
    birthinformation: birthInfoSchema
});

const beneficiary = mongoose.model('beneficiary', beneficiarySchema);

module.exports = beneficiary;