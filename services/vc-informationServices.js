import {VcDetails} from "../model/vcDetails.js";
import { ConflictError } from "../utils/errors.js";


export const uploadVcDetails = async (userId, data) => {
  try {
    
    const existingVC = await VcDetails.findOne({ userId });
    
    if (existingVC) {
      throw new ConflictError('Vc details already exist for this user.');
    }

    const vcData = {
      userId,
      ...data
    };

    const vc = await VcDetails.create(vcData);
  } catch (e) {
   throw e;
  }
};

  export const FetchVcDetails = async (userId) => {
    try {
      
      const vc = await VcDetails.findOne({ userId })
        
  
 
      if (!vc) {
        throw new Error("vc not found");
      }
  
      return vc;
    } catch (error) {
      console.error("Error fetching vc details:", error);
      throw new Error("Failed to fetch vc details");
    }
  };