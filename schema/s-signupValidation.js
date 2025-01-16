import { checkSchema } from "express-validator";
export const signupValidationSchema = checkSchema({
  requestId:{
    isString:{
      errorMessage:"Must contain only Numbers"
    }
  },
  otp:{
    isString:{
      errorMessage:"Must Contain String"
    }
  },
  phoneNumber:{
    isString:{
      errrorMessage:"Must Contrain only string"
    }
  }
});