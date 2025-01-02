import { checkSchema } from "express-validator";

export const PartnerloginValidationSchema = checkSchema({
  email: {
    isEmail: {
      errorMessage: "Valid email is required",
    },
    normalizeEmail: true,
  },
  password: {
    isString: {
      errorMessage: "Password must be a string",
    },
    isLength: {
      options: { min: 6 },
      errorMessage: "Password must be at least 6 characters long",
    },
  },
});