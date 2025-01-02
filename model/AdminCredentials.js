import mongoose from "mongoose"

const AdminCredentialsSchema = new mongoose.Schema({
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

export const AdminCredentials= mongoose.model('AdminCredentials', AdminCredentialsSchema);
