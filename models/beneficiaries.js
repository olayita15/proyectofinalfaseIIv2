const mongoose = require('mongoose');
const { Schema } = mongoose;


const basicInfoSchema = require("./beneficiaries/basicInfoSchema");
const birthInfoSchema = require("./beneficiaries/birthinformationSchema");
const healthSchema = require('./beneficiaries/healthSchema');
const disabilityInfoSchema = require("./beneficiaries/disabilityInfoSchema");
const parentSchema = require("./beneficiaries/parentSchema");

const beneficiarySchema = new Schema({
    basicinfo: {type: basicInfoSchema, required: false},
    birthinformation: birthInfoSchema,
    healthInfo: healthSchema,
    parent: {type: parentSchema, required: false},
    disabilityInfo: disabilityInfoSchema
});

const beneficiary = mongoose.model('beneficiary', beneficiarySchema);

module.exports = beneficiary;