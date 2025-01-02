import { saveStartupCredentials, hashPassword, generateToken } from "../services/s-authServices.js";
import { matchedData, validationResult } from "express-validator";
import { logger } from "../config/logger.js";
import { ValidationError } from "../utils/errors.js";

export const AdminStartupSignupController = async (req, res, next) => {
  try {
    const result = validationResult(req);
    if (result.isEmpty()) {
      const data = matchedData(req);

      data.password = await hashPassword(data.password);
      const savedData = await saveStartupCredentials(data);

      return res.status(201).json({ msg: "Startup Credentials Created successful", savedData });
    } else {
      logger.error("Invalid Information", result.errors);
      next(new ValidationError("Invalid input data."));
    }
  } catch (e) {
    logger.error("Error during signup", e);
    next(e);
  }
};

