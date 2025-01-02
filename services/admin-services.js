import { AdminCredentials } from "../model/AdminCredentials.js";
import { PartnerCredentials } from "../model/PartnerCredentials.js";
import PartnerDetails from "../model/PartnerDetails";

export const saveAdminCredentials = async (data) => {
  try {
    console.log(data)
    const username = data.username
    const newAdmin = await AdminCredentials.create(data);
    return newAdmin;
  } catch (error) {
    throw error;
  }
};
export const fetchAdminCredentialsEmail = async (data) => {
  try {
    const Admin = await AdminCredentials.findOne({ email: data.email });

    if (!Admin) {
      throw new NotFoundError("Admin not found");
    }

    return Admin;
  } catch (error) {
    console.error("Error fetching Admin credentials:", error.message);
    throw new AuthenticationError("Error fetching Admin credentials");
  }
};

export const fetchAdminCredentialsId = async (data) => {
  try {
    const Admin = await AdminCredentials.findOne({ _id: data._id });

    if (!Admin) {
      throw new AuthenticationError("Admin not found");
    }

    return Admin;
  } catch (error) {
    console.error("Error fetching Admin credentials:", error.message);
    throw new AuthenticationError("Error fetching Admin credentials");
  }
};