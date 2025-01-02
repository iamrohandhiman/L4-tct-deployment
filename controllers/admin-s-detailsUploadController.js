import { validationResult,matchedData } from "express-validator";
import { ValidationError,DatabaseError } from "../utils/errors.js";
import { uploadStartupDetails } from "../services/s-informationServices.js";

export const AdminStartupDetailsUploadController = async (req, res, next) => {
  try {
    const result = validationResult(req);
    if (result.isEmpty()) {
      const {id} = req.params
      let data = matchedData(req);
      data = { userId: id, ...data, hasfilledStartupDetails: true };
      await uploadStartupDetails(data);
      res.status(200).send({ msg: "Information upload successful" });
    } else {
      next(new ValidationError("Invalid data", 400));
    }
  } catch (error) {
    next(error);
  }
};
