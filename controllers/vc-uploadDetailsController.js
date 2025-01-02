import { matchedData, validationResult } from "express-validator";
import { ValidationError } from "../utils/errors.js";
import { uploadInvestorDetails } from "../services/i-informationServices.js";
import { uploadVcDetails } from "../services/vc-informationServices.js";
import { updateVcDetails } from "../services/vc-authService.js";

export const vcDetailsUploadController = async (req, res, next) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    try {
      const userId = req._id;
      const data = matchedData(req);
      await uploadVcDetails(userId, data);
      res.status(201).send({ "msg": "Data sent successfully" });
    } catch (e) {
      next(e);
    }
  } else {
    next(new ValidationError());
    console.log(result)
  }
};
