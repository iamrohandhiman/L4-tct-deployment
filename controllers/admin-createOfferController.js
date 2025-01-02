import {validationResult,matchedData} from "express-validator"
import { ValidationError } from "../utils/errors.js"
import { createOffer } from "../services/offersServices.js"
export const AdminCreateOfferController = async(req,res,next)=>{
  const result = validationResult(req)
  if(result.isEmpty()){
     try{
      const userId = req.params.id
      const {offerTo,description} = matchedData(req)
      await createOffer(userId,offerTo,description)
      res.status(201).json({msg:"offer created successfully"})
     }
     catch(e){
       next(e) 
     }
  }
  else{
    next(new ValidationError())
  }
}