import {  hashPassword, generateToken } from "../services/s-authServices.js";
import { matchedData, validationResult } from "express-validator";
import { logger } from "../config/logger.js";
import { ValidationError } from "../utils/errors.js";
import { savePartnerCredentials } from "../services/p-authService.js";
import { saveAdminCredentials } from "../services/admin-services.js";

export const AdminSignupController = async (req, res, next) => {
  try {
    const result = validationResult(req);
    if (result.isEmpty()) {
      const userId = req._id
      const data = matchedData(req);
      data.password = await hashPassword(data.password);
      const savedData = await saveAdminCredentials(data);
      
      const token = generateToken(savedData._id, "admin");
      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",  
        sameSite: "Strict",  
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });

      return res.status(201).json({ msg: "signup successful" });
    } else {
      logger.error("Invalid Information", result.errors);
      next(new ValidationError("Invalid input data."));
    }                     
  } catch (e) {
    logger.error("Error during signup", e);
    next(e);
  }
};