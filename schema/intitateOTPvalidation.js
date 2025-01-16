import { checkSchema } from "express-validator";
export const inititateOTPvalidation = checkSchema({
  phoneNumber:{
    isString:{
      errorMessage:"Must contain only Numbers"
    }
  }
});