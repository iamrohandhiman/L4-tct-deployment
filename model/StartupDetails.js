import mongoose from "mongoose";

const { Schema, model } = mongoose;

const StartupDetailsSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "StartupCredentials", 
    unique: true,
  },
  startupDetails: {
    businessName: { type: String, required: true },
    registeredName: { type: String, default: "" },
    website: { type: String, default: "" },
    sector: { type: String, required: true },
    stage: { type: String, required: true },
    dateOfIncorporation: { type: Date, default: null },
    detailsAboutCompany: { type: String, default: "" },
  },
  founder: {
    name: { type: String, required: true },
    gender: { type: String, default: "" },
    contactDetails: {
      emailId: { type: String, required: true },
      phoneNo: { type: String, required: true },
      linkedinProfile: { type: String, default: "" },
    },
    country:{ type: String, default: "" },
    city: { type: String, default: "" },
  },
  cofounders: [
    {
      name: { type: String, default: "" },
      gender: { type: String, default: "" },
      contactDetails: {
        emailId: { type: String, default: "" },
        phoneNo: { type: String, default: "" },
        linkedinProfile: { type: String, default: "" },
      },
      country:{ type: String, default: "" },
      city: { type: String, default: "" },
    },
  ],
  documents: {
    companyPan: {
      key: { type: String, default: "" },
      type: { type: String, default: "PDF" },
      uploaded: { type: Boolean, default: false },
    },
    certificateOfIncorporation: {
      key: { type: String, default: "" },
      type: { type: String, default: "PDF" },
      uploaded: { type: Boolean, default: false },
    },
    auditedFinancials: {
      key: { type: String, default: "" },
      type: { type: String, default: "PDF" },
      uploaded: { type: Boolean, default: false },
    },
    mis: {
      key: { type: String, default: "" },
      type: { type: String, default: "PDF" },
      uploaded: { type: Boolean, default: false },
    },
    businessProjections: {
      key: { type: String, default: "" },
      type: { type: String, default: "PDF" },
      uploaded: { type: Boolean, default: false },
    },
    logo: {
      key: { type: String, default: "" },
      type: { type: String, default: "PDF" },
      uploaded: { type: Boolean, default: false },
    },
    pitchdeck: {
      key: { type: String, default: "" },
      type: { type: String, default: "PDF" },
      uploaded: { type: Boolean, default: false },
    },
  },
  fundingDocuments: {
    capTable: {
      key: { type: String, default: "" },
      type: { type: String, default: "PDF" },
      uploaded: { type: Boolean, default: false },
    },
    unitEconomics: {
      key: { type: String, default: "" },
      type: { type: String, default: "PDF" },
      uploaded: { type: Boolean, default: false },
    },
    accountReceivables: {
      key: { type: String, default: "" },
      type: { type: String, default: "PDF" },
      uploaded: { type: Boolean, default: false },
    },
    GST3B: {
      key: { type: String, default: "" },
      type: { type: String, default: "PDF" },
      uploaded: { type: Boolean, default: false },
    },
    bankStatements: {
      key: { type: String, default: "" },
      type: { type: String, default: "PDF" },
      uploaded: { type: Boolean, default: false },
    },
    loanTracker: {
      key: { type: String, default: "" },
      type: { type: String, default: "PDF" },
      uploaded: { type: Boolean, default: false },
    },
    teamSizeProfiles: {
      key: { type: String, default: "" },
      type: { type: String, default: "PDF" },
      uploaded: { type: Boolean, default: false },
    },
    addressContract: {
      key: { type: String, default: "" },
      type: { type: String, default: "PDF" },
      uploaded: { type: Boolean, default: false },
    },
  },
  financialDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "StartupFinance",
    default: null,
  },
  InvestorOffers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "InvestorOffers",
      default: null,
    },
  ],
  fundingRequest: {
    requestType: {
      type: String,
      enum: ["equity", "debt", "A/M"],
    },
    amountRequested: { type: Number, default: 0 },
    valuationRange: { type: Number, default: 0 },
    reasonForFunding: { type: String, default: "" },
    requestedAt: {
      type: Date,
      default: Date.now,
    },
  },
  RecivedOffers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "InvestorOffers",
    },
  ],
  hasfilledStartupDetails: { type: Boolean, default: false },
  hasfilledDocuments: { type: Boolean, default: false },
  hasfilledFinancialDetails: { type: Boolean, default: false },
  hasfilledFundingRequest: { type: Boolean, default: false },

  partners: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PartnerDetails",
      default:null
    },
  ]

});

export const StartupDetails = model("StartupDetails", StartupDetailsSchema);
