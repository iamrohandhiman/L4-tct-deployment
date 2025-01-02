import { findPartnerSanitised } from "../services/p-informationServices.js"

export const PartnerSearchInfoController = async(req,res,next)=>{
  try{
    const PartnerIndex = req.query.partnerIndex
    const partner = await findPartnerSanitised(PartnerIndex) 
    res.send(partner)
  }
  catch(e){
    next(e)
  }
}