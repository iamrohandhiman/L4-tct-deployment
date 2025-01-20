import { saveStartupCredentials, hashPassword, generateToken } from "../services/s-authServices.js";
import { matchedData, validationResult } from "express-validator";
import { logger } from "../config/logger.js";
import { ValidationError } from "../utils/errors.js";
import { fetchStartupCredentialsPhone } from "../services/s-authServices.js";
import { verifyOtp } from "../services/otpLessService.js";
import dotenv from "dotenv"

dotenv.config()

export const startupSignupController = async (req, res, next) => {
  try {
    const result = validationResult(req);
    console.log(result)
    if (result.isEmpty()) {
      const data = matchedData(req);
      console.log(data)
      //only verification
      // data.password = await hashPassword(data.password);
     
      // const investor = await fetchInvestorCredentialsEmail(data)  //change to phone

      // if(investor){
      //   return res.status(409).send({"msg":"email already in use as Investor"})
      // }
      const result = await verifyOtp(data.requestId,data.otp)
    
      if (result.isOTPVerified === true) {
        const savedData = await saveStartupCredentials(data);
      
        const token = generateToken(savedData._id, "startup");
        res.cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "None",
          maxAge: 30 * 24 * 60 * 60 * 1000,
        });
  
  
        return res.status(201).json({ msg: "signup successful" });
      }
      else{
        res.status(401).json(result.message)
      }
      
      
    } else {
      logger.error("Invalid Information", result.errors);
      next(new ValidationError("Invalid input data."));
    }                     
  } catch (e) {
    logger.error("Error during signup", e);
    next(e);
  }
};
