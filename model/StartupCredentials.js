import mongoose from "mongoose";

const StartupCredentialsSchema = new mongoose.Schema({
  phoneNumber:{
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['startup'], 
    required: true,
    default: 'startup', 
  },
}, {
  timestamps: true,
});

export const StartupCredentials = new mongoose.model(
  "StartupCredentials",
  StartupCredentialsSchema
);
