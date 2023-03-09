const mongoose = require('mongoose');
const { Schema } = mongoose;
const basicInfoSchema = require("./beneficiaries/basicInfoSchema");
const birthInfoSchema = require("./beneficiaries/birthinformationSchema");
const healthSchema = require('./beneficiaries/healthSchema');

const beneficiarySchema = new Schema({
    basicinfo: {type: basicInfoSchema, require: true},
    birthinformation: {type: birthInfoSchema, require: true},
    healthInfo: {type: healthSchema, require: true}
});

const beneficiary = mongoose.model('beneficiary', beneficiarySchema);

module.exports = beneficiary;