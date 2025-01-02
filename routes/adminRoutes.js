import express from "express"
import { AdminValidation } from "../schema/admin-loginValidation.js"
import { checkAdminLoginStatus } from "../middlewares/admin-loginStatusCheckMiddleware.js"
import { AdminLoginController } from "../controllers/admin-loginController.js"
import { AdminSignupController } from "../controllers/admin-signupController.js"
import { adminAuthentication } from "../middlewares/admin-authentication.js"
import { AdminLogoutController } from "../controllers/admin-logoutController copy.js"
import {checkStartupLoginStatus} from "../middlewares/s-loginStatusCheckMiddleware.js"
import { startupSignupController } from "../controllers/s-signupController.js";
import { startupLoginController } from "../controllers/s-loginController.js";
import { startupLogoutController } from "../controllers/s-logoutController.js";
import {signupValidationSchema} from "../schema/s-signupValidation.js"
import { loginValidationSchema } from "../schema/s-loginValidation.js";
import { StartupAuthentication } from "../middlewares/s-authentication.js"
import { AdminStartupSignupController } from "../controllers/Admin-s-signupController.js"
import startupDetailsValidation from "../schema/s-detailsValidation.js"
import { startupDetailsUploadController } from "../controllers/s-detailsUploadController.js"
import { AdminStartupDetailsUploadController } from "../controllers/admin-s-detailsUploadController.js"
import { startupDetailsUpdateController } from "../controllers/s-detailsUpdateController.js"
import { AdminstartupDetailsUpdateController } from "../controllers/admin-s-detailsUpdateController.js"
import { fundingRequestValidationSchema } from "../schema/s-fundingRequestValidation.js"
import { StartupFundRequestController } from "../controllers/s-fundRequestController.js"
import { AdminStartupFundRequestController } from "../controllers/admin-s-fundRequestController.js"
import { investorValidationSchema } from "../schema/i-signupValidation.js";
import { investorSignupController } from "../controllers/i-signupController.js";
import { checkInvestorLoginStatus } from "../middlewares/i-loginStatusCheckMiddleware.js";
import { investorLoginController } from "../controllers/i-loginController.js";
import { InvestorAuthentication } from "../middlewares/i-authentication.js";
import { InvestorLogoutController } from "../controllers/i-logoutController.js";
import { AdminInvestorSignupController } from "../controllers/admin-i-signupController.js"
import validateInvestorDetails from "../schema/i-detailsValidation.js"
import { InvestorDetailsUploadController } from "../controllers/i-detailsUploadController.js"
import { AdminInvestorDetailsUploadController } from "../controllers/admin-i-detailsUploadController.js"
import { InvestorDetailsUpdateController } from "../controllers/i-detailsUpdateController.js"
import { AdminInvestorDetailsUpdateController } from "../controllers/admin-i-detailsUpdateController.js"
import validateInvestorOffer from "../schema/offerValidation.js"
import { createOfferController } from "../controllers/createOfferController.js"
import { AdminCreateOfferController } from "../controllers/admin-createOfferController.js"
import { vcValidationSchema } from "../schema/vc-signupValidation.js"
import { vcSignupController } from "../controllers/vc-signupController.js"
import { AdminVcSignupController } from "../controllers/admin-vc-signupController.js"
import { VcAuthentication } from "../middlewares/VcAuthentication.js";
import { validateVcDetails } from "../schema/vc-detailsValidation.js";
import { vcDetailsUploadController } from "../controllers/vc-uploadDetailsController.js";
import { VcdetailsFetchController } from "../controllers/vc-detailsFetchController.js";
import { MultipleVcFetchController } from "../controllers/vc-multipleFetchController.js";
import { VcDetailsUpdateController } from "../controllers/vc-detailsUpdateController.js";
import { AdminVcDetailsUploadController } from "../controllers/admin-vc-uploadDetailsController.js"
import { AdminVcDetailsUpdateController } from "../controllers/admin-vc-detailsUpdateController.js"
import { partnerValidationSchema } from "../schema/p-signupValidation.js"
import { partnerSignupController } from "../controllers/p-signupController.js"
import { checkPartnerLoginStatus } from "../middlewares/p-loginStatusCheckMiddleware.js"
import { PartnerloginValidationSchema } from "../schema/p-loginValidation.js"
import { partnerLoginController } from "../controllers/p-loginController.js"
import { PartnerAuthentication } from "../middlewares/p-authentication.js"
import { partnerLogoutController } from "../controllers/p-LogoutController.js"
import { AdminPartnerSignupController } from "../controllers/admin-p-signupController.js"
import { PartnerValidateStartupDetails } from "../schema/p-createStartupValidation.js"
import { PartnerCreateStartupController } from "../controllers/p-CreateStartupController.js"
import { AdminPartnerCreateStartupController } from "../controllers/admin-p-CreateStartupController.js"
import { PartnerInfoUploadController } from "../controllers/p-infoUploadController.js"
import { AdminPartnerInfoUploadController } from "../controllers/admin-p-infoUploadController.js"


const router = express.Router()


//signup
router.post("/api/v1/admin/signup",
  AdminValidation,
  AdminSignupController
)


//login
router.post(
  "/api/v1/admin/login",
  checkAdminLoginStatus,
  AdminValidation,
  AdminLoginController
)

//logout 
router.post("/api/v1/partner/logout",
  adminAuthentication,
  AdminLogoutController
)




//create Startup
router.post(
  "/api/v1/startup/admin/signup",
  signupValidationSchema,
  adminAuthentication,
  AdminStartupSignupController
)

//create Startup Information
router.post(
  "/api/v1/startup/admin/info/upload/:id",
  adminAuthentication,
  startupDetailsValidation,
  AdminStartupDetailsUploadController
)

//update startup Information
router.post(
  "/api/v1/startup/admin/info/update/:id",
  adminAuthentication,
  startupDetailsValidation,
  AdminstartupDetailsUpdateController
);

//create StartupFunding Request
router.post(
  "/api/v1/startup/admin/fund-request/:id",
  adminAuthentication,
  fundingRequestValidationSchema,
  AdminStartupFundRequestController
)


//create Investor
router.post(
  "/api/v1/investor/admin/signup",
  adminAuthentication,
  investorValidationSchema,
  AdminInvestorSignupController
);

//create Investor Info
router.post(
  "/api/v1/investor/admin/upload/info/:id",
  adminAuthentication,
  validateInvestorDetails,
  AdminInvestorDetailsUploadController
)

//update Investor Info
router.patch(
  "/api/v1/investor/admin/update/info/:id",
  adminAuthentication,
  validateInvestorDetails,
  AdminInvestorDetailsUpdateController
)

//File for a Offer
router.post("/api/v1/investor/admin/create/offer/:id",
  adminAuthentication,
  validateInvestorOffer,
  AdminCreateOfferController
)


//create Vc
router.post("/api/v1/vc/admin/signup",
  adminAuthentication,
  vcValidationSchema,
  AdminVcSignupController
)

//upload vc info
router.post(
  "/api/v1/vc/admin/upload/info/:id",
  adminAuthentication,
  validateVcDetails,
  AdminVcDetailsUploadController
);


//update vc info
router.patch(
  "/api/v1/vc/admin/update/info/:id",
  adminAuthentication,
  validateVcDetails,
  AdminVcDetailsUpdateController
)

//create Partner
router.post("/api/v1/partner/admin/signup",
  partnerValidationSchema,
  AdminPartnerSignupController
)

//partner Info Upload
router.post("/api/v1/partner/admin/upload/info/:id",
  adminAuthentication,
  AdminPartnerInfoUploadController
)

//partner create Startup
router.post("/api/v1/partner/admin/create-startup/:id",
  adminAuthentication,
  AdminPartnerCreateStartupController
)




export default router
