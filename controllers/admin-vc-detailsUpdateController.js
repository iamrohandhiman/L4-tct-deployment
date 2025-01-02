import { matchedData,validationResult } from "express-validator";
import { updateInvestorDetails } from "../services/i-informationServices.js";
import { ValidationError } from "../utils/errors.js";
import { updateVcDetails } from "../services/vc-authService.js";
export const AdminVcDetailsUpdateController = async(req,res,next)=>{
  const result = validationResult(req);
  if (result.isEmpty()) {
    try {
      const userId = req.params.id;
      console.log(userId)
      const data = matchedData(req);
      await updateVcDetails(userId, data);
      res.status(201).send({ "msg": "Data Updated successfully" });
    } catch (e) {
      next(e);
    }
  } else {
    next(new ValidationError());
    console.log(result)
  }
}