import { checkSchema } from "express-validator";

export const validateVcDetails = checkSchema({
  details: {
    isString: {
      errorMessage: "Details must be a string",
    },
    notEmpty: {
      errorMessage: "Details field is required",
    },
  },
  type: {
    isString: {
      errorMessage: "Type must be a string",
    },
    notEmpty: {
      errorMessage: "Type is required",
    },
    isIn: {
      options: [['VC', 'PE', 'Lender', 'FO', 'FOF', 'Institutional Investor']],
      errorMessage:
        "Type must be one of VC, PE, Lender, FO, FOF, or Institutional Investor",
    },
  },
  website: {
    optional: true,
    isURL: {
      errorMessage: "Website must be a valid URL",
    },
  },
  email: {
    optional: true,
    isEmail: {
      errorMessage: "Invalid email format",
    },
    normalizeEmail: true,
  },
  person: {
    optional: true,
    isString: {
      errorMessage: "Person must be a string",
    },
  },
  personEmail: {
    optional: true,
    isEmail: {
      errorMessage: "Invalid person email format",
    },
    normalizeEmail: true,
  },
  phoneNumber: {
    optional: true,
    matches: {
      options: [/^\+?[1-9]\d{1,14}$/],
      errorMessage: "Invalid phone number format",
    },
  },
  sector: {
    optional: true,
    isString: {
      errorMessage: "Sector must be a string",
    },
  },
  location: {
    optional: true,
    isString: {
      errorMessage: "Location must be a string",
    },
  },
  interestedLocation: {
    optional: true,
    isString: {
      errorMessage: "Interested location must be a string",
    },
  },
  minimumTicket: {
    optional: true,
    isNumeric: {
      errorMessage: "Minimum ticket must be a number",
    },
  },
  maximumTicket: {
    optional: true,
    isNumeric: {
      errorMessage: "Maximum ticket must be a number",
    },
  },
  stage: {
    optional: true,
    isString: {
      errorMessage: "Stage must be a string",
    },
  },
  particularInterest: {
    optional: true,
    isString: {
      errorMessage: "Particular interest must be a string",
    },
  },
});
