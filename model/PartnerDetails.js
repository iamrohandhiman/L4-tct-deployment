import mongoose from 'mongoose';

const PartnerDetailsSchema = new mongoose.Schema({
  name: {
    type: String,
    
  },
  feild1: {
    type: String,
    default:null
  },
  feild2: {
    type: String,
    default:null
  },
   userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "PartnerCredentials", 
      unique: true,
    },
  partnerStartups: [{
    type: String, 
  }],
});

const PartnerDetails = mongoose.model('PartnerDetails', PartnerDetailsSchema);

export default PartnerDetails;
