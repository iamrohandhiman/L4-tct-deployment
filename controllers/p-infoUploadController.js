import { UpdatePartnerInfo } from "../services/p-informationServices.js";

export const PartnerInfoUploadController = async (req, res,next) => {
  try {
    const partnerId = req._id;  
    const data = req.body;
   
   
    const updatedPartner = await UpdatePartnerInfo(partnerId, data);

    if (!updatedPartner) {
   
      return res.status(404).json({ message: "Partner not found or failed to update" });
    }

   
    res.status(200).json({ message: "Partner information updated successfully", data: updatedPartner });
  } catch (e) {
    console.log(e);
    next(e)
  }
};
