import { checkSchema } from 'express-validator';
import mongoose from 'mongoose';

export const PartnerValidateStartupDetails = checkSchema({
  email:{
    in: ['body'],
    isString: true,
    notEmpty: true,
    errorMessage: 'email name is required',
  },
  password:{
    in: ['body'],
    isString: true,
    notEmpty: true,
    errorMessage: 'password name is required',
  },
  'startupDetails.businessName': {
    in: ['body'],
    isString: true,
    notEmpty: true,
    errorMessage: 'Business name is required',
  },
  'startupDetails.registeredName': {
    in: ['body'],
    isString: true,
    notEmpty: true,
    errorMessage: 'Registered name is required',
  },
  'startupDetails.website': {
    in: ['body'],
    isURL: true,
    notEmpty: true,
    errorMessage: 'Valid website is required',
  },
  'startupDetails.sector': {
    in: ['body'],
    isString: true,
    notEmpty: true,
    errorMessage: 'Sector is required',
  },
  'startupDetails.stage': {
    in: ['body'],
    isString: true,
    notEmpty: true,
    errorMessage: 'Stage is required',
  },
  'startupDetails.dateOfIncorporation': {
    in: ['body'],
    isDate: true,
    notEmpty: true,
    errorMessage: 'Valid date of incorporation is required',
  },
  'startupDetails.detailsAboutCompany': {
    in: ['body'],
    isString: true,
    notEmpty: true,
    errorMessage: 'Details about the company are required',
  },
  'founder.name': {
    in: ['body'],
    isString: true,
    notEmpty: true,
    errorMessage: 'Founder name is required',
  },
  'founder.gender': {
    in: ['body'],
    isString: true,
    notEmpty: true,
    errorMessage: 'Founder gender is required',
  },
  'founder.contactDetails.emailId': {
    in: ['body'],
    isEmail: true,
    notEmpty: true,
    errorMessage: 'Valid email ID is required',
  },
  'founder.contactDetails.phoneNo': {
    in: ['body'],
    isString: true,
    notEmpty: true,
    errorMessage: 'Phone number is required',
  },
  'founder.contactDetails.linkedinProfile': {
    in: ['body'],
    isURL: true,
    notEmpty: true,
    errorMessage: 'LinkedIn profile URL is required',
  },
  'founder.city': {
    in: ['body'],
    isString: true,
    notEmpty: true,
    errorMessage: 'Founder city is required',
  },
  partners: {
    in: ['body'],
    optional: true,
    isArray: true,
    errorMessage: 'Invalid partner data',
  },
});


