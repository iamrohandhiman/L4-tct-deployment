
import express from "express"
import { PartnerValidateStartupDetails } from "../schema/p-createStartupValidation.js"
import { matchedData } from "express-validator"
import { PartnerAuthentication } from "../middlewares/p-authentication.js"
import { PartnerCreateStartupController } from "../controllers/p-CreateStartupController.js"
import { PartnerSearchInfoController } from "../controllers/p-SearchInfoController.js"
import { PartnerInfoUploadController } from "../controllers/p-infoUploadController.js"
import { MultiplePartnerFetchController } from "../controllers/p-multiplePartnerFetchController.js"


const router = express.Router()

router.post("/api/v1/partner/upload/info",
  PartnerAuthentication,
    //valdidation to be added on formalisation of format
  PartnerInfoUploadController
)



router.post("/api/v1/partner/find",
  // PartnerAuthentication,
  PartnerSearchInfoController
)


//pagination

router.get(
  "/api/v1/partner/infos",
  MultiplePartnerFetchController
);



//create an startup 
router.post("/api/v1/partner/create-startup",
  PartnerAuthentication,
  PartnerValidateStartupDetails,
  PartnerCreateStartupController
)


export default router


