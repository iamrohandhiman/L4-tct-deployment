import { NotFoundError } from "../utils/errors.js"
import { logger } from "../config/logger.js";
import { fetchOfferDetails } from "../services/offersServices.js";
export const FetchInvestorOfferController = async (req, res, next) => {
  try {
    const {offerId} = req.query;
    console.log(offerId)
    const offerDetails = await fetchOfferDetails(offerId);

    if (!offerDetails) {
      throw new NotFoundError('Offer not found');
    }

    res.status(200).json({ success: true, data: offerDetails });
  } catch (e) {
    logger.error('Error fetching investor offer:', e);
    next(e);
  }
};
