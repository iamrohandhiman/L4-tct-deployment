import { vcCredentials } from "../model/vcCredentials.js";
import { InvestorCredentials } from "../model/InvestorCredentials.js";
import { ValidationError } from "../utils/errors.js";
import { AuthenticationError } from "../utils/errors.js";
import { NotFoundError } from "../utils/errors.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { VcDetails } from "../model/vcDetails.js";


export const saveVcCredentials = async (data) => {
  try {
    const newVc = await vcCredentials.create(data);
    return newVc;
  } catch (error) {
    throw error;
  }
};

export const fetchVcCredentialsId = async (data) => {
  try {
    
    const vc = await vcCredentials.findOne({ _id: data._id });
   
    if (!vc) {
      throw new AuthenticationError("vc not found");
    }

    return vc;
  } catch (error) {
    console.error("Error fetching vc credentials:", error.message);
    throw new AuthenticationError("Error fetching vc credentials");
  }
};


export const fetchVcCredentialsEmail = async (data) => {
  try {
    const vc = await vcCredentials.findOne({ email: data.email });
   
    if (!vc) {
      throw new NotFoundError("Vc not found");
    }

    return vc;
  } catch (error) {
    console.error("Error fetching Vc credentials:", error.message);
    throw new AuthenticationError("Error fetching Vc credentials");
  }
};



export const updateVcDetails = async (userId, data) => {
  try {
    console.log(data)
    const updatedVc = await VcDetails.findOneAndUpdate(
      { userId: userId }, 
      { $set: data },  
      { new: true }   
    );

    if (!updatedVc) {
      throw new NotFoundError();
    }

  
  } catch (error) {
    console.log(error)
    throw error;
  }
};


export const fetchVcPagination = async (query, limit, skip) => {
  try {
    const vcs = await VcDetails.find()
     
    return vcs;
  } catch (e) {
    logger.error(e);
    throw new DatabaseError("Error fetching vcs.");
  }
}



