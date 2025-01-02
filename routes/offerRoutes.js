import express from "express"
import { InvestorAuthentication } from "../middlewares/i-authentication.js"
import { InvestorSubscriptionActiveSubCheck } from "../middlewares/i-subscriptionCheckMiddleware.js"
import { mixAuth } from "../middlewares/miXAuth.js"
import { createOfferController } from "../controllers/createOfferController.js"
import validateInvestorOffer from "../schema/offerValidation.js"
import { StartupAuthentication } from "../middlewares/s-authentication.js"
import offerIdValidation from "../schema/offerIdValidation.js"
import { acceptOfferController } from "../controllers/acceptOfferController.js"
import { FetchInvestorOfferController } from "../controllers/FetchInvestorofferController.js"
const router = express.Router()

router.post("/api/v1/investor/create/offer",
  InvestorAuthentication,
  InvestorSubscriptionActiveSubCheck,
  validateInvestorOffer,
  createOfferController
)

router.get("/api/v1/offer/details",mixAuth,FetchInvestorOfferController)

router.post("/api/v1/startup/accept/offer",
  StartupAuthentication,
  offerIdValidation,
  acceptOfferController
)

export default router