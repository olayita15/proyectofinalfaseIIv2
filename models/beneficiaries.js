const mongoose = require('mongoose');
const { Schema } = mongoose;

const basicInfoSchema = require("./beneficiaries/basicInfoSchema");
const birthInfoSchema = require("./beneficiaries/birthinformationSchema");
const healthSchema = require('./beneficiaries/healthSchema');
const residencyInformationSchema = require('./beneficiaries/residencyInformationSchema');
const socialInformationSchema = require('./beneficiaries/socialInformationSchema');
const assistanceInformationSchema = require('./beneficiaries/assistanceInformationSchema');
const disabilityInfoSchema = require("./beneficiaries/disabilityInfoSchema");
const parentSchema = require("./beneficiaries/parentSchema");
const guardianSchema = require('./beneficiaries/guardianSchema')

const beneficiarySchema = new Schema({
    basicinfo: {type: basicInfoSchema, required: false },
    birthinformation: birthInfoSchema,
    healthInfo: healthSchema,
    residencyInformation: residencyInformationSchema,
    socialInformation: socialInformationSchema,
    assistanceInformation: assistanceInformationSchema,
    parent: {type: parentSchema, required: false},
    guardianInfo: {type: guardianSchema},
    disabilityInfo: disabilityInfoSchema
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    
});

const beneficiary = mongoose.model('beneficiary', beneficiarySchema);
module.exports = beneficiary;