import { fetchStartupCredentialsId } from "../services/s-authServices.js";
import { decryptToken } from "../services/s-authServices.js";
import { fetchVcCredentialsId } from "../services/vc-authService.js";

export const VcAuthentication = async (req, res, next) => {
  try {
    let { token } = req.cookies;

    if (!token) {
      return res.status(401).json({ msg: "Authentication token is missing" });
    }

    const decoded = decryptToken(token);
    if(decoded.type!="vc"){
      return res.status(401).json({ msg: "You must be signed in as a vc to access this" })
    }
    const _id = decoded.id;
    req._id = _id;
    const result = await fetchVcCredentialsId({ _id });
    if (!result) {
      return res.status(401).json({ msg: "Invalid token or vc not found" });
    }
    
    next();

  } catch (e) {
    console.error("Error during authentication:", e.message);

    if (e.message.includes("JWT")) {
     
      return res.status(401).json({ msg: "Invalid or expired token" });
    } else {
      
      return res.status(500).json({ msg: "Internal server error" });
    }
  }
};
