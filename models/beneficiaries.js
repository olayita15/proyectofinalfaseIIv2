const mongoose = require('mongoose');
const { Schema } = mongoose;

const basicInfoSchema = require("./beneficiaries/basicInfoSchema");
const birthInfoSchema = require("./beneficiaries/birthinformationSchema");
const healthSchema = require('./beneficiaries/healthSchema');
const residencyInformationSchema = require('./beneficiaries/residencyInformationSchema');
const socialInformationSchema = require('./beneficiaries/socialInformationSchema');

const beneficiarySchema = new Schema({
    basicinfo: {type: basicInfoSchema, virtual:true/* required: true */},
    birthinformation: birthInfoSchema,
    healthInfo: healthSchema,
    residencyInformation: residencyInformationSchema,
    socialInformation: socialInformationSchema,
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

const beneficiary = mongoose.model('beneficiary', beneficiarySchema);

module.exports = beneficiary;