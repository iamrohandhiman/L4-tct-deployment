import { fetchPartnerCredentialsEmail, fetchPartnerCredentialsId } from "../services/p-authService.js";
import { fetchStartupCredentialsId } from "../services/s-authServices.js";
import { decryptToken } from "../services/s-authServices.js";


export const checkPartnerLoginStatus = async (req, res, next) => {
  try {
   
    let { token } = req.cookies;
    if (!token) {
      return next();  
    }

    const decoded = decryptToken(token);
    const _id = decoded.id;  

    const result = await fetchPartnerCredentialsId({ _id });
    if (result) {
      return res.status(409).json({ msg: "Already logged in" });
    }

    next();

  } catch (e) {

    console.error("Error checking login status:", e.message);
    next()
  }
};