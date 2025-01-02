import mongoose from "mongoose"

const vcCredentialsSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true, 
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true, 
    match: [/.+@.+\..+/, 'Please enter a valid email address'],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
}, {
  timestamps: true, 
});

export const vcCredentials= mongoose.model('vcCredentials', vcCredentialsSchema);
