import { matchedData,validationResult } from "express-validator";
import { FetchInvestorDetails } from "../services/i-informationServices.js";
import { ValidationError } from "../utils/errors.js";
import { FetchVcDetails } from "../services/vc-informationServices.js";
export const VcdetailsFetchController = async(req,res,next)=>{
  const result = validationResult(req);
  if (result.isEmpty()) {
    try {
      const userId = req._id;
      console.log(userId)
      const data = matchedData(req);
      const User = await FetchVcDetails(userId);
      res.status(201).send(User);
    } catch (e) {
      console.log(e)
      next(e);
    }
  } else {
    next(new ValidationError());
  }
}