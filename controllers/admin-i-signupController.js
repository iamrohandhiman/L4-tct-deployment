import { hashPassword } from "../services/s-authServices.js";
import { matchedData,validationResult } from "express-validator";
import { generateToken } from "../services/s-authServices.js";
import { ValidationError } from "../utils/errors.js";
import { saveInvestorCredentials } from "../services/i-authServices.js";
import { logger } from "../config/logger.js";
export const AdminInvestorSignupController=async(req,res,next)=>{
  try {
    const result = validationResult(req);
    if (result.isEmpty()) {
      const data = matchedData(req);
      data.password = await hashPassword(data.password);
      const savedData = await saveInvestorCredentials(data); //needs to be changed
      
     

      return res.status(201 ).json({ msg: "signup successful",savedData });
    } else {
      logger.error("Invalid Information", result.errors);
      next(new ValidationError("Invalid input data."));
    }                     
  } catch (e) {
    logger.error("Error during signup", e);
    next(e);
  }
};
