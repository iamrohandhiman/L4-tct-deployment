import {  hashPassword, generateToken } from "../services/s-authServices.js";
import { matchedData, validationResult } from "express-validator";
import { logger } from "../config/logger.js";
import { ValidationError } from "../utils/errors.js";
import { savePartnerCredentials } from "../services/p-authService.js";

export const AdminPartnerSignupController = async (req, res, next) => {
  try {
    const result = validationResult(req);
    if (result.isEmpty()) {
      const userId = req._id
      const data = matchedData(req);
      data.password = await hashPassword(data.password);
      const savedData = await savePartnerCredentials(data);
      
      
      return res.status(201).json({ msg: "signup successful",savedData });
    } else {
      logger.error("Invalid Information", result.errors);
      next(new ValidationError("Invalid input data."));
    }                     
  } catch (e) {
    logger.error("Error during signup", e);
    next(e);
  }
};
