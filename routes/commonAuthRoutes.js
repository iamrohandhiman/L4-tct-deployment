import express from "express"
import { loginValidationSchema } from "../schema/i-loginValidation.js"
import { commonLoginController } from "../controllers/commonLogin.js"
import { signupValidationSchema } from "../schema/s-signupValidation.js"

const router = express.Router()

router.post("/api/v1/common/login",
  signupValidationSchema,
  commonLoginController
) 

export default router