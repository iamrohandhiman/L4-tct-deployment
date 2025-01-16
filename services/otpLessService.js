import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

export const SendOtp = async (phoneNumber) => {
  const data = { phoneNumber: phoneNumber.phoneNumber, channels: ["SMS"] };

  const config = {
    headers: {
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      "Content-Type": "application/json"
    }
  };

  try {
    const response = await axios.post('https://auth.otpless.app/auth/v1/initiate/otp', data, config);
    return response.data
  } catch (error) {
    throw error
    console.error(error);
  }
}



export const verifyOtp = async (requestId, otp) => {
  console.log("okay", requestId, otp);
  const data = {
    requestId: requestId,
    otp: otp
  };

  const config = {
    headers: {
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      "Content-Type": "application/json"
    }
  };

  try {
    const response = await axios.post('https://auth.otpless.app/auth/v1/verify/otp', data, config);
    return response.data;
  } catch (error) {
    console.log(error)
    throw error; // Ensure that errors are properly thrown or returned
  }
};







