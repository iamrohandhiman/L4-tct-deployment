import { matchedData } from "express-validator";
import { fetchInvestorCredentialsId } from "../services/i-authServices.js";
import { fetchStartupCredentialsId } from "../services/s-authServices.js";
import { decryptToken } from "../services/s-authServices.js";
import { fetchVcCredentialsId } from "../services/vc-authService.js";


export const checkVcLoginStatus = async (req, res, next) => {
  try {
    const data = matchedData(req)
    console.log(data)
    let { token } = req.cookies;
    if (!token) {
      return next();  
    }

    const decoded = decryptToken(token);
    const _id = decoded.id;  

    const result = await fetchVcCredentialsId({ _id });
    if (result) {
      return res.status(409).json({ msg: "Already logged in" });
    }

    next();

  } catch (e) {

    console.error("Error checking login status:", e.message);
    next()
  }
};
