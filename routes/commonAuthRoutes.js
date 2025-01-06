import express from "express"
import { loginValidationSchema } from "../schema/i-loginValidation.js"
import { commonLoginController } from "../controllers/commonLogin.js"

const router = express.Router()

router.post("/api/v1/common/login",
  loginValidationSchema,
  commonLoginController
) 

export default router