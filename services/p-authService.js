import { PartnerCredentials } from "../model/PartnerCredentials.js";
import PartnerDetails from "../model/PartnerDetails";

export const savePartnerCredentials = async (data) => {
  try {
    console.log(data)
    const username = data.username
    const newPartner = await PartnerCredentials.create(data);
    const userId = newPartner._id
    const newPartnerDetails = await PartnerDetails.create({userId:userId,name:username})

    return newPartner;
  } catch (error) {
    throw error;
  }
};
export const fetchPartnerCredentialsEmail = async (data) => {
  try {
    const partner = await PartnerCredentials.findOne({ email: data.email });

    if (!partner) {
      throw new NotFoundError("partner not found");
    }

    return partner;
  } catch (error) {
    console.error("Error fetching partner credentials:", error.message);
    throw new AuthenticationError("Error fetching partner credentials");
  }
};

export const fetchPartnerCredentialsId = async (data) => {
  try {
    const partner = await PartnerCredentials.findOne({ _id: data._id });

    if (!partner) {
      throw new AuthenticationError("partner not found");
    }

    return partner;
  } catch (error) {
    console.error("Error fetching partner credentials:", error.message);
    throw new AuthenticationError("Error fetching partner credentials");
  }
};