import { matchedData, validationResult } from "express-validator"
import { hashPassword, saveStartupCredentials } from "../services/s-authServices.js"
import { ValidationError } from "../utils/errors.js"
import { uploadStartupDetails } from "../services/s-informationServices.js"
import PartnerDetails from "../model/PartnerDetails.js"

export const  AdminPartnerCreateStartupController = async(req,res,next)=>{
  const result  = validationResult(req)
  if(result.isEmpty()){
    try{
      const id = req.params.id
      console.log("xxxxxxxxxxx",id)
      const data = matchedData(req)
      const hashedPassword = await hashPassword(data.password)
      const startupEmail = data.email
      const businessName = data.startupDetails.businessName
      //create a startup in startupAuthDetails
      const credentials = {
        businessName:businessName,
        email:startupEmail,
        password:hashedPassword
      }
     const createStartupCredentials = await saveStartupCredentials(credentials)
  
     //create a startup in startup-Ifnormation-Details
     const startupId = createStartupCredentials._id
     console.log(startupId)
     const {email,password,...startUpData}  = data
     console.log(startUpData)
     const dataToBeUploaded = { userId:startupId,...startUpData,hasfilledStartupDetails: true,partners:[id] }
     console.log(dataToBeUploaded)
     const UploadedStartupInfo = await uploadStartupDetails(dataToBeUploaded)
     const UpdatedPartnerInfo  = await PartnerDetails.updateOne({userId:id},{$addToSet:{partnerStartups:startupId}})
     res.send(UploadedStartupInfo)
    }
    catch(e){
      next(e)
    }
   
  }
  else{
    console.log(result)
    next(new ValidationError("error"))
  }
}