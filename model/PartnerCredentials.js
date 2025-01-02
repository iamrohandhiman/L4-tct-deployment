import mongoose from "mongoose";

const PartnerCredentialsSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true, 
    unique: true, 
    trim: true,
    lowercase: true, 
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
  },
  password: {
    type: String,
    required: true, 
    minlength: 8,
  },
  type: {
    type: String,
    enum: ['partner'], 
    required: true,
    default: 'partner', 
  },
}, {
  timestamps: true,
});

export const PartnerCredentials = new mongoose.model(
  "PartnerCredentials",
  PartnerCredentialsSchema
);
