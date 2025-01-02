import express from "express"
import { vcValidationSchema } from "../schema/vc-signupValidation.js"
import { vcSignupController } from "../controllers/vc-signupController.js"
import { vcloginValidationSchema } from "../schema/vc-loginValidation.js"
import { checkVcLoginStatus } from "../middlewares/vc-loginStatusCheckMiddleware.js"
import { vcLoginController } from "../controllers/vc-loginController.js"
import { VcAuthentication } from "../middlewares/VcAuthentication.js"
import { VcLogoutController } from "../controllers/vc-logoutController.js"
const router = express.Router()



router.post("/api/v1/vc/signup",
  vcValidationSchema,
  vcSignupController
)


router.post("/api/v1/vc/login",
 vcloginValidationSchema,
 checkVcLoginStatus,
 vcLoginController 
)

router.post("/api/v1/vc/logout",
  VcAuthentication,
  VcLogoutController
)




export default router


