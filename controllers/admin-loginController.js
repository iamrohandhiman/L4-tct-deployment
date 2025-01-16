import { validationResult, matchedData } from "express-validator";
import { fetchStartupCredentialsPhone, generateToken } from "../services/s-authServices.js";
import { AuthenticationError } from "../utils/errors.js";
import bcrypt from "bcrypt";
import { logger } from "../config/logger.js";
import { fetchPartnerCredentialsEmail } from "../services/p-authService.js";
import { fetchAdminCredentialsEmail } from "../services/admin-services.js";

export const AdminLoginController = async (req, res, next) => {
  try {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      logger.error("Validation errors", result.errors);
      return next(new AuthenticationError());
    }

    const data = matchedData(req);
   

    const adminData = await fetchAdminCredentialsEmail(data);
    if (!adminData) {
      return next(new AuthenticationError("Admin credentials not found"));
    }
    
    const isPasswordMatch = await bcrypt.compare(data.password, adminData.password);
    if (!isPasswordMatch) {
      return next(new AuthenticationError());
    }

    const token = generateToken(adminData._id, "admin");

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 30 * 24 * 60 * 60 * 1000, 
    });

    return res.status(200).json({ msg: "Login Successful" });
  } catch (error) {
    logger.error("Error during login", error);
    next(error);
  }
};
