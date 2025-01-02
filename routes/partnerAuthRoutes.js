import express from "express"
import { partnerValidationSchema } from "../schema/p-signupValidation.js"
import { partnerSignupController } from "../controllers/p-signupController.js"
import { checkPartnerLoginStatus } from "../middlewares/p-loginStatusCheckMiddleware.js"
import { PartnerloginValidationSchema } from "../schema/p-loginValidation.js"
import { partnerLoginController } from "../controllers/p-loginController.js"
import { PartnerAuthentication } from "../middlewares/p-authentication.js"
import { partnerLogoutController } from "../controllers/p-LogoutController.js"

const router = express.Router()

router.post("/api/v1/partner/signup",
  partnerValidationSchema,
  partnerSignupController
)

router.post(
  "/api/v1/partner/login",
  checkPartnerLoginStatus,
  PartnerloginValidationSchema,
  partnerLoginController
)

router.post("/api/v1/partner/logout",
  PartnerAuthentication,
  partnerLogoutController
)
export default router


