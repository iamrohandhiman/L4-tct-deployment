import { fetchAdminCredentialsId } from "../services/admin-services.js";
import { fetchPartnerCredentialsId } from "../services/p-authService.js";
import { fetchStartupCredentialsId } from "../services/s-authServices.js";
import { decryptToken } from "../services/s-authServices.js";

export const adminAuthentication = async (req, res, next) => {
  try {
    let { token } = req.cookies;

    if (!token) {
      return res.status(401).json({ msg: "Authentication token is missing" });
    }

    const decoded = decryptToken(token);
    if(decoded.type!="admin"){
      return res.status(401).json({ msg: "You must be Admin in as a partner to access this" })
    }
    const _id = decoded.id;
    req._id = _id;
    const result = await fetchAdminCredentialsId({ _id });
    if (!result) {
      return res.status(401).json({ msg: "Invalid token or Admin not found" });
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
