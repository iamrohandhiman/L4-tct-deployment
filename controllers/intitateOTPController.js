import { matchedData, validationResult } from "express-validator"
import { SendOtp } from "../services/otpLessService.js"
import { ValidationError } from "../utils/errors.js"

export const intitateOTPController = async(req,res,next)=>{
  const result = validationResult(req)
  if(result.isEmpty){
    try{
      const phoneNumber = matchedData(req)
      console.log(phoneNumber)
      const result =await SendOtp(phoneNumber)
      res.status(201).json(result)
    }
    catch(e){
      next(e)
    }
  }
  else{
    next(ValidationError)
  }
  
}