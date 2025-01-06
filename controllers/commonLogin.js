import { validationResult, matchedData } from "express-validator";
import { fetchStartupCredentialsEmail, generateToken } from "../services/s-authServices.js";
import { fetchInvestorCredentialsEmail } from "../services/i-authServices.js";
import { AuthenticationError } from "../utils/errors.js";
import bcrypt from "bcrypt";
import { logger } from "../config/logger.js";

export const commonLoginController = async (req, res, next) => {
  try {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      logger.error("Validation errors", result.errors);
      return next(new AuthenticationError("Validation failed"));
    }

    const data = matchedData(req);
    const startupData = await fetchStartupCredentialsEmail(data);

    if (startupData) {
      const isPasswordMatch = await bcrypt.compare(data.password, startupData.password);
      
      if (!isPasswordMatch) {
        return next (new AuthenticationError("Invalid password"));
      }

      const token = generateToken(startupData._id, "startup");
      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Strict",
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });

      return res.status(200).json({ msg: "Login Successful", userType: "startup" });
    }

    const investorData = await fetchInvestorCredentialsEmail(data.email);
    if (!investorData) {
      return next(new AuthenticationError("Startup or Investor credentials not found"));
    }

    const isPasswordMatch = await bcrypt.compare(data.password, investorData.password);
    if (!isPasswordMatch) {
      return next(new AuthenticationError("Invalid password"));
    }

    const token = generateToken(investorData._id, "investor");
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({ msg: "Login Successful", userType: "investor" });
  } catch (error) {
    logger.error("Error during login", error);
    next(error);
  }
};
