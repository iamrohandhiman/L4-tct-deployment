import PartnerDetails from "../model/PartnerDetails"

export const findPartnerSanitised = async(partnerId) =>{
     try{
      const Partner  = await PartnerDetails.findOne({_id:partnerId})
      return Partner 
     }
     catch(e){
      throw (e)
     }
  } 


export const UpdatePartnerInfo = async(partnerId,data)=>{

  try{  
    const UpdatePartnerInfo = await PartnerDetails.updateOne({userId:partnerId},
    {$set:{data}}
   
  )
  return UpdatePartnerInfo}
  catch(e){
    throw(e)
  }
}

export const fetchPartnerPagination = async (query, limit, skip) => {
  try {
    const startups = await PartnerDetails.find({})
      .limit(limit)
      .skip(skip);
    return startups;
  } catch (e) {
    logger.error(e);
    throw new DatabaseError("Error fetching startups.");
  }
};