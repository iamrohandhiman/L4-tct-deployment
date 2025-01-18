import express from "express";
import dotenv from "dotenv";
import { connectDatabase } from "./config/database.js";
import { logger } from "./config/logger.js";
import cors from "cors"



// connect database
connectDatabase();

//import Middlewares
import entryErrorHandlerMiddleware from "./middlewares/errorMiddleware.js";
import cookieParser from "cookie-parser";
import { StartupAuthentication } from "./middlewares/s-authentication.js";
import { RequestLogger } from "./middlewares/requestLoggerMiddleware.js";


//import routes
import startupAuthRouter from "./routes/startupAuthRoutes.js";
import startupDetailsRouter from "./routes/startupDetailsRoutes.js"
import startupFinanceRouter from "./routes/startupFinanceRoutes.js"
import investorAuthRoutes from "./routes/investorAuthRoutes.js"
import investorDetailsRouter from "./routes/investorDetailsRoutes.js"
import paymentRouter from "./routes/paymentRoutes.js"
import offersRouter from "./routes/offerRoutes.js"
import vcAuthRouter from "./routes/vcAuthRoutes.js"
import vcDetailsRouter from "./routes/vcDetailsRoute.js"
import partnerAuthRouter from "./routes/partnerAuthRoutes.js"
import partnerDetailsRouter from "./routes/partnerInformationRoutes.js"
import AdminRoutes from "./routes/adminRoutes.js"
import CommonAuthRoutes from "./routes/commonAuthRoutes.js"
const app = express();


//setup
dotenv.config();
app.use(express.json());
app.use(cors({
  origin: "*",       
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"], 
  allowedHeaders: ["Content-Type", "Authorization"], 
  credentials: true,    
}))

//enviornment variables
const PORT = process.env.PORT || 3000;


//middleware
app.use(cookieParser())


//middleware routes
app.use(RequestLogger)
app.use(startupAuthRouter);
app.use(investorAuthRoutes)



//protected routes
// app.use(StartupAuthentication)
app.use(startupDetailsRouter)
app.use(startupFinanceRouter)
app.use(investorDetailsRouter)
app.use(paymentRouter)
app.use(offersRouter)

app.use(vcAuthRouter)
app.use(vcDetailsRouter)

app.use(partnerAuthRouter)
app.use(partnerDetailsRouter)

app.use(AdminRoutes)

app.use(CommonAuthRoutes)

//error middlewares in-usage
app.use(entryErrorHandlerMiddleware);

//listener
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
