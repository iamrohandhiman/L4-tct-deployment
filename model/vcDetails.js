import mongoose  from "mongoose";
const vcDetailsSchema = new mongoose.Schema({
  userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'InvestorCredentials',
      required: true
    },
  details: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    enum: ['VC', 'PE', 'Lender', 'FO', 'FOF', 'Institutional Investor'],
    required: true,
  },
  website: {
    type: String,
    required: false,
    trim: true,
  },
  email: {
    type: String,
    required: false,
    match: [/.+\@.+\..+/, 'Invalid email format.'],
  },
  person: {
    type: String,
    required: false,
    trim: true,
  },
  personEmail: {
    type: String,
    required: false,
    match: [/.+\@.+\..+/, 'Invalid email format.'],
  },
  phoneNumber: {
    type: String,
    required: false,
    match: [/^\+?[1-9]\d{1,14}$/, 'Invalid phone number.'],
  },
  sector: {
    type: String,
    required: false,
    trim: true,
  },
  location: {
    type: String,
    required: false,
    trim: true,
  },
  interestedLocation: {
    type: String,
    required: false,
    trim: true,
  },
  minimumTicket: {
    type: Number,
    required: false,
  },
  maximumTicket: {
    type: Number,
    required: false,
  },
  stage: {
    type: String,
    required: false,
    trim: true,
  },
  particularInterest: {
    type: String,
    required: false,
    trim: true,
  },
});

export const VcDetails = mongoose.model('VcDetails', vcDetailsSchema);

