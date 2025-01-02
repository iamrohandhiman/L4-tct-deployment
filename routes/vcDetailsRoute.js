
import express from "express"
import { VcAuthentication } from "../middlewares/VcAuthentication.js";
import { validateVcDetails } from "../schema/vc-detailsValidation.js";
import { vcDetailsUploadController } from "../controllers/vc-uploadDetailsController.js";
import { VcdetailsFetchController } from "../controllers/vc-detailsFetchController.js";
import { MultipleVcFetchController } from "../controllers/vc-multipleFetchController.js";
import { VcDetailsUpdateController } from "../controllers/vc-detailsUpdateController.js";
const router = express.Router()



//upload Vc details
router.post(
  "/api/v1/vc/upload/info",
  VcAuthentication,
  validateVcDetails,
  vcDetailsUploadController

);

//get Vc details
router.post(
  "/api/v1/vc/fetch/info",
  VcAuthentication,
  VcdetailsFetchController
)

////update Vc details
router.patch(
  "/api/v1/vc/update/info",
  VcAuthentication,
  validateVcDetails,
  VcDetailsUpdateController
)


//fetch all vc details (pagination)
router.get(
  "/api/v1/vc/infos",
  // InvestorAuthentication, (tbd)
  MultipleVcFetchController
)

export default router


